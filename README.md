# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# redux-module-2

# Create React Typescript Project using Vite

```bash
pn create vite
```

- [Redux Official Documentation](https://redux-toolkit.js.org/tutorials/quick-start)

```bash
npm install @reduxjs/toolkit react-redux
pn install @reduxjs/toolkit react-redux
pn i @reduxjs/toolkit react-redux
```

## For using Tailwind

### **TailwindCSS Official Documentation**

[TailwindCSS](https://tailwindcss.com/docs/guides/vite)

```bash
pn i -D postcss autoprefixer tailwindcss
npx tailwindcss init -p
pn tailwindcss init -p
```

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
pn dev
```

# End of Basic Structure

## 24-3 Initial Project Setup

### Basic Structure

### [Middleware](https://redux-toolkit.js.org/api/getDefaultMiddleware#included-default-middleware)

```bash
pn i redux-logger
pn i --save-dev @types/redux-logger
```
