# React + Vite + shadcn/ui + Redux Toolkit Boilerplate

Production-ready starter template with feature-based architecture.

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- shadcn/ui
- Redux Toolkit + React Redux
- React Router DOM
- ESLint

## Installed Packages

### Core
- `react`, `react-dom`
- `vite`, `@vitejs/plugin-react`

### Styling/UI
- `tailwindcss`, `@tailwindcss/vite`, `tw-animate-css`
- `shadcn`, `radix-ui`
- `class-variance-authority`, `clsx`, `tailwind-merge`
- `lucide-react`
- `@fontsource-variable/geist`

### State + Routing
- `@reduxjs/toolkit`
- `react-redux`
- `react-router-dom`

## Scripts

- `npm run dev` - start dev server
- `npm run build` - build for production
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Folder Structure (Feature-Based)

```txt
src/
  app/
    providers.jsx
    router.jsx
    store.js
  assets/
  components/
    shared/
    ui/
      button.jsx
  features/
    auth/
      api/
        authApi.js
      components/
        LoginForm.jsx
      hooks/
        useAuth.js
      pages/
        LoginPage.jsx
      store/
        authSlice.js
      utils/
        authValidation.js
    dashboard/
      api/
      components/
      pages/
        DashboardPage.jsx
      store/
  hooks/
    useAppDispatch.js
    useAppSelector.js
  lib/
    constants.js
    utils.js
  services/
    httpClient.js
  styles/
  App.jsx
  index.css
  main.jsx
```

## What Is Already Wired

- Redux store configured in `src/app/store.js`
- Global providers configured in `src/app/providers.jsx`
- Routing configured in `src/app/router.jsx`
- Sample feature modules:
  - `auth` feature with slice, page, form, hook
  - `dashboard` feature with page
- Tailwind + shadcn styles already active via `src/index.css`
- `@` alias configured for `src/*`

## Architecture Rules

- Keep base shadcn primitives in `src/components/ui`
- Keep reusable app components in `src/components/shared`
- Keep business logic inside `src/features/<feature-name>`
- Keep each feature self-contained (`api`, `components`, `hooks`, `pages`, `store`, `utils`)
- Register reducers in `src/app/store.js`
- Keep shared HTTP setup in `src/services/httpClient.js`

## Example Flow

- `/login` renders `features/auth/pages/LoginPage.jsx`
- Login form dispatches `signIn` from `authSlice`
- `/` (dashboard) reads auth state from Redux and supports sign out

## Start Using As Boilerplate

1. Copy this project.
2. Remove demo feature files you do not need (for example `auth`/`dashboard`).
3. Create new features under `src/features/<your-feature>`.
4. Add feature reducers to `src/app/store.js`.
5. Add new routes in `src/app/router.jsx`.

## Optional Env

Set API base URL in `.env`:

```env
VITE_API_BASE_URL=https://api.example.com
```

`src/lib/constants.js` reads this value.
