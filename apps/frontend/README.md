# Frontend - System Events Viewer

Aplikacja React do przeglądania i filtrowania zdarzeń.

## Funkcjonalności

- Tabela zdarzeń z wykorzystaniem `@mui/x-data-grid`.
- Filtrowanie po poziomie zdarzenia za pomocą Selecta.
- Filtrowanie po zakresie dat za pomocą `@mui/x-date-pickers`.
- Zarządzanie stanem serwerowym przez `@tanstack/react-query`.

## Decyzje projektowe

- Użycie **TanStack Query** zapewnia łatwe keszowanie i obsługę stanu ładowania.
- Wykorzystano **MUI Data Grid**, który natywnie wspiera sortowanie i jest standardem w dashboardach administracyjnych.
- Filtrowanie odbywa się po stronie API (Server-side filtering logic), co jest bardziej skalowalne przy dużych zbiorach
  danych.

# Struktura:

frontend
├── .env
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── public
│ ├── assets
│ │ ├── cyan-blur.png
│ │ ├── icons
│ │ │ ├── certificates
│ │ │ │ └── ic-courses-certificates.svg
│ │ │ ├── empty
│ │ │ │ ├── ic-content.svg
│ │ │ │ └── ic-folder-empty.svg
│ │ │ ├── faqs
│ │ │ │ ├── ic-account.svg
│ │ │ │ └── ic-avatar.svg
│ │ │ ├── files
│ │ │ │ └── ic-document.svg
│ │ │ └── flagpack
│ │ │ ├── pl.webp
│ │ │ ├── ua.webp
│ │ │ └── us.webp
│ │ ├── illustrations
│ │ ├── placeholder.svg
│ │ ├── red-blur.png
│ │ └── transparent.png
│ └── vite.svg
├── src
│ ├── api
│ │ └── queries
│ │ └── use-get-events.query.ts
│ ├── app.tsx
│ ├── assets
│ │ └── illustrations
│ │ ├── avatar-shape.tsx
│ │ ├── background-shape.tsx
│ │ ├── forbidden-illustration.tsx
│ │ ├── index.ts
│ │ ├── motivation-illustration.tsx
│ │ ├── page-not-found-illustration.tsx
│ │ └── server-error-illustration.tsx
│ ├── common
│ │ └── query-client
│ │ ├── index.ts
│ │ └── query-client.ts
│ ├── components
│ │ ├── animate
│ │ │ ├── animate-avatar.tsx
│ │ │ ├── features.ts
│ │ │ ├── index.ts
│ │ │ ├── motion-container.tsx
│ │ │ ├── motion-lazy.tsx
│ │ │ ├── types
│ │ │ │ └── types.ts
│ │ │ └── variants
│ │ │ ├── actions.ts
│ │ │ ├── bounce.ts
│ │ │ ├── container.ts
│ │ │ ├── index.ts
│ │ │ └── transition.ts
│ │ ├── custom-popover
│ │ │ ├── custom-popover.tsx
│ │ │ ├── hooks
│ │ │ │ └── use-popover.ts
│ │ │ ├── index.ts
│ │ │ ├── styles
│ │ │ │ └── styles.tsx
│ │ │ ├── types
│ │ │ │ └── types.ts
│ │ │ └── utils
│ │ │ └── utils.ts
│ │ ├── empty-content
│ │ │ ├── empty-content.tsx
│ │ │ └── index.ts
│ │ ├── iconify
│ │ │ ├── flag-icon.tsx
│ │ │ ├── iconify.tsx
│ │ │ ├── index.ts
│ │ │ ├── social-icon.tsx
│ │ │ ├── styles
│ │ │ │ └── classes.ts
│ │ │ └── types
│ │ │ └── types.ts
│ │ ├── locat-time
│ │ │ └── local-time.tsx
│ │ ├── nav-section
│ │ │ ├── hooks.tsx
│ │ │ ├── horizontal
│ │ │ │ ├── nav-item.tsx
│ │ │ │ └── nav-list.tsx
│ │ │ ├── index.ts
│ │ │ ├── mini
│ │ │ │ ├── nav-item.tsx
│ │ │ │ └── nav-list.tsx
│ │ │ ├── styles
│ │ │ │ ├── classes.ts
│ │ │ │ ├── css-vars.ts
│ │ │ │ └── styles.tsx
│ │ │ ├── types
│ │ │ │ └── types.ts
│ │ │ └── vertical
│ │ │ ├── nav-item.tsx
│ │ │ └── nav-list.tsx
│ │ ├── progress-bar
│ │ │ ├── index.ts
│ │ │ ├── progress-bar.tsx
│ │ │ └── styles.css
│ │ ├── scrollbar
│ │ │ ├── index.ts
│ │ │ ├── scrollbar.tsx
│ │ │ ├── styles
│ │ │ │ ├── classes.ts
│ │ │ │ └── styles.css
│ │ │ └── types
│ │ │ └── types.ts
│ │ ├── settings
│ │ │ ├── config-settings.ts
│ │ │ ├── context
│ │ │ │ ├── index.ts
│ │ │ │ ├── settings-provider.tsx
│ │ │ │ └── use-settings-context.ts
│ │ │ ├── drawer
│ │ │ │ └── types
│ │ │ │ └── types.ts
│ │ │ └── index.ts
│ │ ├── snackbar
│ │ │ ├── index.ts
│ │ │ ├── snackbar.tsx
│ │ │ └── styles
│ │ │ ├── classes.ts
│ │ │ └── styles.tsx
│ │ ├── svg-color
│ │ │ ├── index.ts
│ │ │ ├── styles
│ │ │ │ └── classes.ts
│ │ │ ├── svg-color.tsx
│ │ │ └── types
│ │ │ └── types.ts
│ │ └── table
│ │ ├── enums
│ │ │ └── table.enums.ts
│ │ ├── hooks
│ │ │ └── use-table.ts
│ │ ├── index.ts
│ │ ├── styles
│ │ │ └── table.styles.tsx
│ │ ├── table-empty-rows.tsx
│ │ ├── table-head-custom.tsx
│ │ ├── table-no-data.tsx
│ │ ├── table-selected-action.tsx
│ │ ├── types
│ │ │ └── table.types.ts
│ │ └── utils
│ │ └── table.utils.ts
│ ├── hooks
│ │ ├── use-boolean.ts
│ │ ├── use-local-storage.tsx
│ │ ├── use-scroll-offset-top.ts
│ │ └── use-scroll-to-top.ts
│ ├── layouts
│ │ ├── components
│ │ │ ├── language-popover.tsx
│ │ │ ├── menu-button.tsx
│ │ │ └── settings-button.tsx
│ │ ├── config-nav-main.tsx
│ │ ├── core
│ │ │ ├── header-base.tsx
│ │ │ ├── header-section.tsx
│ │ │ └── layout-section.tsx
│ │ ├── main
│ │ │ ├── index.ts
│ │ │ ├── layout.tsx
│ │ │ ├── main.tsx
│ │ │ └── nav
│ │ │ ├── desktop
│ │ │ │ ├── index.ts
│ │ │ │ ├── nav-desktop-item.tsx
│ │ │ │ ├── nav-desktop-list.tsx
│ │ │ │ └── nav-desktop.tsx
│ │ │ └── types.ts
│ │ └── styles
│ │ └── classes.ts
│ ├── locales
│ │ ├── all-langs.ts
│ │ ├── config-locales.ts
│ │ ├── index.ts
│ │ ├── langs
│ │ │ ├── en
│ │ │ │ └── common.json
│ │ │ └── pl
│ │ │ └── common.json
│ │ ├── providers
│ │ │ ├── i18n-provider.tsx
│ │ │ └── localization-provider.tsx
│ │ ├── use-locales.ts
│ │ └── utils
│ │ └── number-format-locale.ts
│ ├── main.tsx
│ ├── pages
│ │ └── events.pages.tsx
│ ├── routes
│ │ ├── components
│ │ │ ├── index.ts
│ │ │ ├── router-link.tsx
│ │ │ └── types
│ │ │ └── routes-link.types.ts
│ │ ├── hooks
│ │ │ ├── index.ts
│ │ │ ├── use-active-link.ts
│ │ │ ├── use-pathname.ts
│ │ │ └── use-router.ts
│ │ ├── paths.ts
│ │ └── utils
│ │ ├── index.ts
│ │ └── utils.ts
│ ├── sections
│ │ ├── error
│ │ │ ├── 403-view.tsx
│ │ │ ├── 500-view.tsx
│ │ │ └── index.ts
│ │ └── file-manager
│ │ ├── __tests__
│ │ ├── utils
│ │ │ └── events.utils.ts
│ │ └── view
│ │ ├── file-manager-view.tsx
│ │ └── index.ts
│ ├── styles
│ │ └── global.css
│ ├── theme
│ │ ├── color-scheme-script.ts
│ │ ├── core
│ │ │ ├── colors.json
│ │ │ ├── components
│ │ │ │ ├── accordion.tsx
│ │ │ │ ├── alert.tsx
│ │ │ │ ├── appbar.tsx
│ │ │ │ ├── autocomplete.tsx
│ │ │ │ ├── avatar.tsx
│ │ │ │ ├── backdrop.tsx
│ │ │ │ ├── badge.tsx
│ │ │ │ ├── breadcrumbs.tsx
│ │ │ │ ├── button-fab.tsx
│ │ │ │ ├── button-group.tsx
│ │ │ │ ├── button-toggle.tsx
│ │ │ │ ├── button.tsx
│ │ │ │ ├── card.tsx
│ │ │ │ ├── checkbox.tsx
│ │ │ │ ├── chip.tsx
│ │ │ │ ├── dialog.tsx
│ │ │ │ ├── drawer.tsx
│ │ │ │ ├── form.tsx
│ │ │ │ ├── index.ts
│ │ │ │ ├── link.tsx
│ │ │ │ ├── list.tsx
│ │ │ │ ├── menu.tsx
│ │ │ │ ├── mui-x-data-grid.tsx
│ │ │ │ ├── mui-x-date-picker.tsx
│ │ │ │ ├── pagination.tsx
│ │ │ │ ├── paper.tsx
│ │ │ │ ├── popover.tsx
│ │ │ │ ├── progress.tsx
│ │ │ │ ├── radio.tsx
│ │ │ │ ├── rating.tsx
│ │ │ │ ├── select.tsx
│ │ │ │ ├── skeleton.tsx
│ │ │ │ ├── slider.tsx
│ │ │ │ ├── stack.tsx
│ │ │ │ ├── stepper.tsx
│ │ │ │ ├── svg-icon.tsx
│ │ │ │ ├── switch.tsx
│ │ │ │ ├── table.tsx
│ │ │ │ ├── tabs.tsx
│ │ │ │ ├── textfield.tsx
│ │ │ │ ├── timeline.tsx
│ │ │ │ ├── tooltip.tsx
│ │ │ │ └── typography.tsx
│ │ │ ├── custom-shadows.ts
│ │ │ ├── index.ts
│ │ │ ├── palette.ts
│ │ │ ├── shadows.ts
│ │ │ └── typography.ts
│ │ ├── create-theme.ts
│ │ ├── overrides-theme.ts
│ │ ├── styles
│ │ │ ├── index.ts
│ │ │ ├── mixins.ts
│ │ │ └── utils.ts
│ │ ├── theme-provider.tsx
│ │ └── with-settings
│ │ ├── primary-color.json
│ │ └── update-theme.ts
│ ├── types
│ │ ├── events.types.ts
│ │ └── types.ts
│ └── utils
│ ├── config-global.ts
│ ├── environment.ts
│ ├── helper.ts
│ └── storage-available.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
