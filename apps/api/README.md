# API - System Events

Backend udostępniający listę zdarzeń systemowych z możliwością filtrowania.

## Endpointy

- `GET /events`: Zwraca listę zdarzeń.
    - Query Params:
        - `minLevel`: Minimalny poziom zdarzenia (DEBUG=0, INFO=1, WARNING=2, ERROR=3)
        - `startDate`: Data początkowa (ISO 8601)
        - `endDate`: Data końcowa (ISO 8601)

## Decyzje projektowe

- Dane są generowane dynamicznie w serwisie (mocki).
- Poziomy zdarzeń mapowane są na wartości numeryczne, aby ułatwić filtrowanie "od danego poziomu wzwyż".

# Struktura:

api
├── .eslintrc.js
├── .prettierrc
├── README.md
├── nest-cli.json
├── package.json
├── src
│ ├── app.module.ts
│ ├── events
│ │ ├── controller
│ │ │ └── events.controller.ts
│ │ ├── module
│ │ │ └── events.module.ts
│ │ ├── services
│ │ │ ├── events.service.spec.ts
│ │ │ └── events.service.ts
│ │ └── types
│ │ └── events.types.ts
│ └── main.ts
├── test
│ ├── app.e2e-spec.ts
│ └── jest-e2e.json
├── tsconfig.build.json
└── tsconfig.json
