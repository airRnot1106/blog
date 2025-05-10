import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{c as r}from"./css-iA79nXp1.js";import{B as _,h as D}from"./blog-article-toc-navigation-section.presentational-dQtKlBpq.js";import{n as P}from"./image-BcZ0HIHc.js";import{c as u}from"./cx-BFURdk0p.js";import{D as g}from"./datetime-At4GKbE0.js";import{c as F}from"./createLucideIcon-dVToDc26.js";import"./jsx-runtime-Bw5QeaCk.js";import"./heading-CjzycUHD.js";import"./heading-SMPioL5v.js";import"./cva-CuDB4TaM.js";import"./anchor-heading-Cp7PjA-Y.js";import"./link-CiQcZn3-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./router-context.shared-runtime-C3rDQPqq.js";import"./index-Za3YRiuF.js";import"./add-base-path-Yz4dcL5G.js";import"./use-merged-ref-vu_KmdPm.js";import"./link-D8HMmSCG.js";import"./underline-link-BKNhLiPR.js";import"./link-DOkctWu4.js";import"./index-DqQFE8CJ.js";import"./image-context-CYaGmMjm.js";import"./index-DDr4uD8U.js";/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Z=F("calendar",W);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],O=F("refresh-cw",H),q=[{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",createdAt:new Date("2023-01-01T00:00:00Z"),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",file:"blog-article-1.md",slug:"blog-article-1",thumbnail:"/images/article/fallback.webp",title:"Blog Article 1",updatedAt:new Date("2024-01-01T00:00:00Z")}],d=({article:{createdAt:o,description:m,thumbnail:z,title:G,updatedAt:p},blogArticleTocNavigationSection:I,children:R,className:X,...E})=>e.jsxs("div",{className:u(X,r({display:"grid",gridAutoFlow:"row",rowGap:"1rem"})),...E,children:[e.jsxs("div",{className:r({display:"grid",gridAutoFlow:"row",rowGap:"0.5rem"}),children:[e.jsx(P,{alt:"",className:r({justifySelf:"center",paddingBlock:"1rem"}),height:"268",src:z,width:"512"}),e.jsxs("div",{className:r({display:"inline-grid",gridAutoFlow:"column",columnGap:"1rem",marginTop:"0.5rem",width:"fit-content"}),children:[e.jsxs("span",{className:r({display:"inline-grid",gridAutoFlow:"column",alignItems:"center",columnGap:"0.5rem"}),children:[e.jsx(Z,{size:"18"}),e.jsx(g,{datetime:o})]}),o.getTime()!==p.getTime()&&e.jsxs("span",{className:r({display:"inline-grid",gridAutoFlow:"column",alignItems:"center",columnGap:"0.5rem"}),children:[e.jsx(O,{size:"18"}),e.jsx(g,{datetime:p})]})]}),e.jsx("h1",{className:r({fontSize:"4xl",fontWeight:"bold"}),children:G}),m!==""&&e.jsx("p",{children:m})]}),e.jsxs("div",{className:r({display:"grid",gridTemplateAreas:{base:`
            "article-toc"
            "article-content"
          `,lg:`
            "article-content article-toc"
          `},gridTemplateColumns:{lg:"1fr auto"}}),children:[e.jsx("aside",{className:r({gridArea:"article-toc",minWidth:"18rem",lgDown:{display:"contents"},lg:{"& > section":{position:"sticky",top:"1rem"}}}),children:I}),e.jsx("div",{className:u(r({gridArea:"article-content"}),"mdc"),children:R})]})]});d.__docgenInfo={description:"",methods:[],displayName:"BlogArticleLayout",props:{article:{required:!0,tsType:{name:"z.infer",elements:[{name:"blogArticleSchema"}],raw:"z.infer<typeof blogArticleSchema>"},description:""},blogArticleTocNavigationSection:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const xe={title:"Features/BlogArticle/Components/Molecules/BlogArticleLayout",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[o=>e.jsx("div",{className:r({padding:"1rem"}),children:e.jsx(o,{})})]},a={render:()=>e.jsx(d,{article:q[0],blogArticleTocNavigationSection:e.jsx(_,{headings:D}),children:"Test"})},t=e.jsx(d,{article:q[0],blogArticleTocNavigationSection:e.jsx(_,{headings:D}),children:"Test"}),s={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"xs"}},render:()=>t},i={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"sm"}},render:()=>t},n={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"md"}},render:()=>t},c={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"lg"}},render:()=>t},l={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"xl"}},render:()=>t};var h,w,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <BlogArticleLayout article={blogArticles[0]} blogArticleTocNavigationSection={<BlogArticleTocNavigationSectionPresentational headings={headings} />}>
        Test
      </BlogArticleLayout>;
  }
}`,...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var x,y,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xs'
    }
  },
  render: () => {
    return Component;
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var A,j,N;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'sm'
    }
  },
  render: () => {
    return Component;
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var S,T,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'md'
    }
  },
  render: () => {
    return Component;
  }
}`,...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var L,k,B;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'lg'
    }
  },
  render: () => {
    return Component;
  }
}`,...(B=(k=c.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var C,M,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xl'
    }
  },
  render: () => {
    return Component;
  }
}`,...(V=(M=l.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const ye=["Default","XSmall","Small","Medium","Large","XLarge"];export{a as Default,c as Large,n as Medium,i as Small,l as XLarge,s as XSmall,ye as __namedExportsOrder,xe as default};
