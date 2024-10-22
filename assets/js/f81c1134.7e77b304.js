"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"integrate-tailwind-and-docusarus","metadata":{"permalink":"/blog/integrate-tailwind-and-docusarus","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/integrate-tailwind-and-docusarus.md","source":"@site/blog/integrate-tailwind-and-docusarus.md","title":"Install TailwindCSS in Docusaurus","description":"We used Docusaurus for documentation and blog of LoCoSpec. We have used TailwindCSS in places. This tutorial is a \\"how-to\\" on the same topic.","date":"2024-10-22T00:00:00.000Z","tags":[{"inline":false,"label":"Tutorial","permalink":"/blog/tags/tutorial","description":"tutorial tag description"}],"readingTime":1.275,"hasTruncateMarker":true,"authors":[{"name":"Rajiv Seelam","title":"Engineer @ LoCoSpec","url":"https://github.com/rjvim","page":{"permalink":"/blog/authors/rjvim"},"socials":{"x":"https://x.com/rjv_im","github":"https://github.com/rjvim"},"imageURL":"https://github.com/rjvim.png","key":"rjvim"}],"frontMatter":{"slug":"integrate-tailwind-and-docusarus","title":"Install TailwindCSS in Docusaurus","authors":"rjvim","tags":["tutorial"],"draft":false,"date":"2024-10-22T00:00:00.000Z"},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"We used Docusaurus for documentation and blog of LoCoSpec. We have used TailwindCSS in places. This tutorial is a \\"how-to\\" on the same topic.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Install & Configure Tailwind\\n\\n### Install\\n\\n```\\nnpm install -D tailwindcss postcss autoprefixer\\nnpx tailwindcss init --ts\\n```\\n\\n### Configure tailwind.config.js\\n\\n```ts\\nimport { type Config } from \\"tailwindcss\\";\\n/** @type {import(\'tailwindcss\').Config} */\\nmodule.exports = {\\n  content: [\\"./src/**/*.html\\", \\"./src/**/*.js\\", \\"./src/**/*.tsx\\"],\\n  corePlugins: { preflight: false },\\n  darkMode: [\\"class\\", \'[data-theme=\\"dark\\"]\'],\\n  theme: {\\n    extend: {},\\n  },\\n  plugins: [],\\n} satisfies Config;\\n```\\n\\n**Highlights**\\n\\n- Preflight is false\\n- darkMode is configured to work with Docusaurus\\n\\n### Add to custom.css\\n\\n```css\\n/**\\n * Any CSS included here will be global. The classic template\\n * bundles Infima by default. Infima is a CSS framework designed to\\n * work well for content-centric websites.\\n */\\n\\n@tailwind base;\\n@tailwind components;\\n@tailwind utilities;\\n\\n/* You can override the default Infima variables here. */\\n```\\n\\n## Docusaurus Tailwind Plugin\\n\\n### Add Docusaurus Plugin\\n\\n```js\\nmodule.exports = function (context, options) {\\n  return {\\n    name: \\"postcss-tailwindcss-loader\\",\\n    // https://github.com/facebook/docusaurus/issues/2961#issuecomment-1531243979\\n    injectHtmlTags() {\\n      return {\\n        headTags: [\\n          {\\n            tagName: \\"link\\",\\n            attributes: {\\n              rel: \\"stylesheet\\",\\n              href: \\"https://cdn.jsdelivr.net/npm/tailwindcss/dist/preflight.min.css\\",\\n            },\\n          },\\n        ],\\n      };\\n    },\\n    configurePostCss(postcssOptions) {\\n      // https://github.com/facebook/docusaurus/issues/2961#issuecomment-1531243979\\n      postcssOptions.plugins.push(require(\\"tailwindcss\\"));\\n      postcssOptions.plugins.push(require(\\"autoprefixer\\"));\\n      return postcssOptions;\\n    },\\n  };\\n};\\n```\\n\\n### Add plugin dependency to package.json\\n\\n```json\\n  \\"devDependencies\\": {\\n    ...\\n    \\"autoprefixer\\": \\"^10.4.20\\",\\n    \\"postcss\\": \\"^8.4.47\\",\\n    \\"tailwindcss\\": \\"^3.4.14\\",\\n    \\"docusaurus-tailwindcss-loader\\": \\"file:plugins/docusaurus-tailwindcss-loader\\"\\n  },\\n```\\n\\n_Run `npm install` after above_\\n\\n> Excluded some packages for brevity\\n\\n### Add plugin to docusaurus.config.js\\n\\n```js\\n{\\n  ... // excluded for brevity\\n  onBrokenMarkdownLinks: \\"warn\\",\\n  plugins: [\\"docusaurus-tailwindcss-loader\\"],\\n}\\n```"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/blog/tags/facebook","description":"Facebook tag description"},{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.465,"hasTruncateMarker":true,"authors":[{"name":"Rajiv Seelam","title":"Engineer @ LoCoSpec","url":"https://github.com/rjvim","page":{"permalink":"/blog/authors/rjvim"},"socials":{"x":"https://x.com/rjv_im","github":"https://github.com/rjvim"},"imageURL":"https://github.com/rjvim.png","key":"rjvim"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["rjvim"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"Install TailwindCSS in Docusaurus","permalink":"/blog/integrate-tailwind-and-docusarus"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nHere are a few tips you might find useful.\\n\\n\x3c!-- truncate --\x3e\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.235,"hasTruncateMarker":true,"authors":[{"name":"Rajiv Seelam","title":"Engineer @ LoCoSpec","url":"https://github.com/rjvim","page":{"permalink":"/blog/authors/rjvim"},"socials":{"x":"https://x.com/rjv_im","github":"https://github.com/rjvim"},"imageURL":"https://github.com/rjvim.png","key":"rjvim"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["rjvim"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n:::\\n\\n{/* truncate */}\\n\\nFor example, use JSX to create an interactive button:\\n\\n```js\\n<button onClick={() => alert(\\"button clicked!\\")}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\\"button clicked!\\")}>Click me!</button>"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet...","date":"2019-05-28T00:00:00.000Z","tags":[{"inline":false,"label":"Hola","permalink":"/blog/tags/hola","description":"Hola tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.135,"hasTruncateMarker":true,"authors":[{"name":"Rajiv Seelam","title":"Engineer @ LoCoSpec","url":"https://github.com/rjvim","page":{"permalink":"/blog/authors/rjvim"},"socials":{"x":"https://x.com/rjv_im","github":"https://github.com/rjvim"},"imageURL":"https://github.com/rjvim.png","key":"rjvim"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":["rjvim"],"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"Lorem ipsum dolor sit amet...\\n\\n\x3c!-- truncate --\x3e\\n\\n...consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}}')}}]);