# Jiva Candles – świece jak małe rytuały spokoju

Jiva Candles to ręcznie robione świece z wosku sojowego, tworzone z myślą o małych codziennych rytuałach: porannej kawie, wieczornej kąpieli, chwili ciszy po intensywnym dniu.

## Technologie

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deploy na Vercel
- GitHub Actions (automatyczne paczki ZIP)

## Struktura

- `app/` – strony (home, sklep, produkt, zamówienie, o mnie, kontakt)
- `components/` – komponenty UI (karty produktów, nawigacja, stopka)
- `context/` – logika koszyka i toasty
- `public/images` – zdjęcia świec i layoutu

## Jak uruchomić lokalnie

```bash
npm install
npm run dev
# aplikacja będzie dostępna pod adresem http://localhost:3000
