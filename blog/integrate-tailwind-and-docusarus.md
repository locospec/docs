---
slug: integrate-tailwind-and-docusarus
title: Install TailwindCSS in Docusaurus
authors: rjvim
tags: [tutorial]
draft: true
date: 2024-10-22
---

We used Docusaurus for documentation and blog of LoCoSpec. We have used TailwindCSS in places. This tutorial is a "how-to" on the same topic.

<!-- truncate -->

## Install & Configure Tailwind

### Install

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init --ts
```

### Configure tailwind.config.js

```ts
import { type Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.tsx"],
  corePlugins: { preflight: false },
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
```

**Highlights**

- Preflight is false
- darkMode is configured to work with Docusaurus

### Add to custom.css

```css
/**
 * Any CSS included here will be global. The classic template
 * bundles Infima by default. Infima is a CSS framework designed to
 * work well for content-centric websites.
 */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* You can override the default Infima variables here. */
```

## Docusaurus Tailwind Plugin

### Add Docusaurus Plugin

```js
module.exports = function (context, options) {
  return {
    name: "postcss-tailwindcss-loader",
    // https://github.com/facebook/docusaurus/issues/2961#issuecomment-1531243979
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "link",
            attributes: {
              rel: "stylesheet",
              href: "https://cdn.jsdelivr.net/npm/tailwindcss/dist/preflight.min.css",
            },
          },
        ],
      };
    },
    configurePostCss(postcssOptions) {
      // https://github.com/facebook/docusaurus/issues/2961#issuecomment-1531243979
      postcssOptions.plugins.push(require("tailwindcss"));
      postcssOptions.plugins.push(require("autoprefixer"));
      return postcssOptions;
    },
  };
};
```

### Add plugin dependency to package.json

```json
  "devDependencies": {
    ...
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "docusaurus-tailwindcss-loader": "file:plugins/docusaurus-tailwindcss-loader"
  },
```

_Run `npm install` after above_

> Excluded some packages for brevity

### Add plugin to docusaurus.config.js

```js
{
  ... // excluded for brevity
  onBrokenMarkdownLinks: "warn",
  plugins: ["docusaurus-tailwindcss-loader"],
}
```
