# System Events Viewer

Projekt rekrutacyjny: Aplikacja do podglądu zdarzeń systemowych.

## Struktura Projektu

- `apps/api`: Backend w NestJS (API zwracające zdarzenia).
- `apps/frontend`: Frontend w React (Material UI, TanStack Query).

## Technologie

- **Monorepo**: Turbo
- **Backend**: NestJS, TypeScript
- **Frontend**: React 19, TypeScript, MUI (@mui/material, @mui/x-data-grid), TanStack Query, Axios, Dayjs

## Instalacja i uruchomienie

1. Zainstaluj zależności: `npm install`
2. Uruchom projekt (API + Frontend): `npm run dev`

API będzie dostępne pod adresem: `http://localhost:3000`
Frontend będzie dostępny pod adresem: `http://localhost:5173`
