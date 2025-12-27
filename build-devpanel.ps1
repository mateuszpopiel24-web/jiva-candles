# DevPanel Build Script (minimal, stable PowerShell version)
$ErrorActionPreference = "Stop"
$zipName = "DevPanel_v4_Final.zip"
$verifyFile = "verify.log"

Write-Host "?? Startujê build DevPanel..." -ForegroundColor Cyan

# 1?? Instalacja
Write-Host "?? Instalujê zale¿noœci..." -ForegroundColor Yellow
npm install

# 2?? Build Next.js
Write-Host "??? Budujê Next.js..." -ForegroundColor Yellow
npm run build

# 3?? Sprawdzenie b³êdów buildu
if ($LASTEXITCODE -ne 0) {
    Write-Host "? B³¹d kompilacji Next.js!" -ForegroundColor Red
    exit 1
}

# 4?? Tworzenie ZIP
if (Test-Path $zipName) {
    Remove-Item $zipName -Force
}
Compress-Archive -Path * -DestinationPath $zipName -Force
Write-Host "?? Utworzono paczkê: $zipName" -ForegroundColor Green

# 5?? Log weryfikacyjny
$hash = Get-FileHash $zipName -Algorithm SHA256
"DevPanel Build Verification Log" | Out-File $verifyFile
"Data: $(Get-Date)" | Out-File $verifyFile -Append
"Plik: $zipName" | Out-File $verifyFile -Append
"SHA256: $($hash.Hash)" | Out-File $verifyFile -Append
Write-Host "?? Raport zapisano: $verifyFile" -ForegroundColor Cyan

Write-Host "? Budowa zakoñczona sukcesem!" -ForegroundColor Green
