# ===============================
# 📦 Skrypt pakujący projekt Jiva Candles do pliku ZIP
# ===============================
# Wersja ostateczna — 100% kompatybilna z PowerShell Windows

Write-Host "🔥 Rozpoczynam pakowanie projektu Jiva Candles..." -ForegroundColor Yellow

# Ustal ścieżkę projektu
$sourcePath = Get-Location

# Nazwa pliku wynikowego (ze znacznikiem czasu)
$date = Get-Date -Format "yyyy-MM-dd_HH-mm"
$zipName = "jiva-candles-$date.zip"
$zipPath = Join-Path $sourcePath "..\$zipName"

# Foldery do pominięcia
$exclude = @("node_modules", ".next", ".git")

Write-Host "🧹 Pomijam: node_modules, .next, .git" -ForegroundColor DarkYellow

# Pobierz wszystkie elementy z projektu oprócz tych w exclude
$itemsToZip = Get-ChildItem -Recurse -File | Where-Object {
    ($_.FullName -notmatch "\\node_modules\\") -and
    ($_.FullName -notmatch "\\.next\\") -and
    ($_.FullName -notmatch "\\.git\\")
}

if (-not $itemsToZip -or $itemsToZip.Count -eq 0) {
    Write-Host "❌ Brak plików do spakowania! Upewnij się, że jesteś w folderze projektu." -ForegroundColor Red
    exit
}

# Tworzenie archiwum
Write-Host "📦 Tworzę archiwum: $zipName..." -ForegroundColor Cyan
Compress-Archive -Path $itemsToZip.FullName -DestinationPath $zipPath -Force

Write-Host ""
Write-Host "✅ Projekt został spakowany pomyślnie!" -ForegroundColor Green
Write-Host "📁 Zapisano w: $zipPath" -ForegroundColor White
Write-Host ""
Write-Host "ℹ️ Gotowe! Możesz wysłać ten plik lub zachować jako kopię projektu." -ForegroundColor Yellow
