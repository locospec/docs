"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3637],{5512:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var r=s(1632),o=s(4848),a=s(8453);s(9443);const n={slug:"mdx-blog-post",title:"MDX Blog Post",authors:["rjvim"],tags:["docusaurus"]},i=void 0,l={authorsImageUrls:[void 0]},d=[];function c(e){const t={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Blog posts support ",(0,o.jsx)(t.a,{href:"https://docusaurus.io/docs/markdown-features",children:"Docusaurus Markdown features"}),", such as ",(0,o.jsx)(t.a,{href:"https://mdxjs.com/",children:"MDX"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Use the power of React to create interactive blog posts."})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},9443:(e,t,s)=>{s.d(t,{A:()=>m});var r=s(6540),o=s(4164),a=s(8504),n=s(3295),i=s(3296),l=s(5293),d=s(4848);let c={none:"",md:"p-2"};function u(e){let{as:t="div",story:s,height:n,iframePointerEvents:i,style:u,padding:m,p:g="md",className:p,containerClassName:h,html:b,children:f,hint:v,hintClassName:x,lightOnly:j=!1}=e,k=m??g,w=c[k];const y=(e=>`/ladle?mode=preview&story=${e}`)(s),{colorMode:N,setColorMode:D}=(0,l.G)();if((0,r.useEffect)((()=>{(e=>{const t=document.querySelector("iframe");t&&t.contentDocument&&t.contentDocument.documentElement.setAttribute("data-theme",e)})(N)}),[N]),void 0===w)throw Error(`Invalid padding value: ${JSON.stringify(k)}`);return(0,d.jsx)("div",{className:h,children:(0,d.jsxs)(t,{style:u,className:(0,o.A)("not-prose relative bg-slate-50 rounded-md overflow-hidden",!j&&"dark:bg-slate-800/25"),children:[(0,d.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,o.A)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!j&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,d.jsx)("div",{className:(0,o.A)("relative border rounded-md border-gray-200 border-dashed dark:border-gray-700 !overflow-hidden",w,p),children:(0,d.jsx)(a.P.iframe,{id:"my-iframe",className:"w-full",src:y,height:n,allow:"cross-origin-isolated",style:{pointerEvents:i}})}),(0,d.jsx)("div",{className:(0,o.A)("absolute inset-0 pointer-events-none border border-black/5",!j&&"dark:border-white/5")})]})})}const m=e=>{let{story:t,initialWidth:s=800,height:o=720}=e,l=(0,r.useRef)(),c=(0,n.d)(0),m=(0,r.useRef)(),g=(0,r.useRef)(null),p=(0,n.d)("auto");return(0,r.useEffect)((()=>{const e=new window.ResizeObserver((()=>{c.set(0)}));return e.observe(l.current),()=>{e.disconnect()}}),[]),(0,r.useEffect)((()=>{g.current&&(g.current.onselectstart=()=>!1)}),[]),(0,d.jsxs)("div",{ref:l,className:"relative twp",children:[(0,d.jsx)(u,{as:a.P.div,style:{marginRight:(0,i.G)(c,(e=>-e))},story:t,height:o,iframePointerEvents:p}),(0,d.jsx)("div",{ref:m,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,d.jsx)(a.P.div,{ref:g,drag:"x",_dragX:c,dragMomentum:!1,dragElastic:0,dragConstraints:m,className:"absolute right-0 inset-y-0 hidden p-3 pointer-events-auto  md:block cursor-ew-resize",style:{x:c},onDragStart:()=>{document.documentElement.classList.add("dragging-ew"),p.set("none")},onDragEnd:()=>{document.documentElement.classList.remove("dragging-ew"),p.set("auto")},children:(0,d.jsx)("div",{className:"absolute top-1/2 w-1.5 h-8 bg-slate-500/60 rounded-full -translate-x-1/2 left-1/2",style:{transform:"translateX(-3px)"}})})})]})}},1632:e=>{e.exports=JSON.parse('{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.275,"hasTruncateMarker":true,"authors":[{"name":"Rajiv Seelam","title":"Engineer @ LoCoSpec","url":"https://github.com/rjvim","page":{"permalink":"/blog/authors/rjvim"},"socials":{"x":"https://x.com/rjv_im","github":"https://github.com/rjvim"},"imageURL":"https://github.com/rjvim.png","key":"rjvim"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["rjvim"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}}')}}]);