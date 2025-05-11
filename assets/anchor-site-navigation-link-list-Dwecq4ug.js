import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{c as i}from"./css-iA79nXp1.js";import{S as t}from"./site-navigation-link-DyBbwdSt.js";const s=({links:a,className:m,...n})=>e.jsx("ul",{className:i({display:"grid",gridTemplateColumns:"auto 1fr"}),...n,children:a.map(r=>e.jsx("li",{className:i({display:"grid",gridTemplateColumns:"subgrid",gridColumn:"1 / -1"}),children:e.jsx(t,{className:i({gridTemplateColumns:"subgrid",gridColumn:"1 / -1"}),link:r})},r.id))});s.__docgenInfo={description:"",methods:[],displayName:"AnchorSiteNavigationLinkList",props:{links:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  label: string;
  href: string;
  icon: ReactElement;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactElement",required:!0}}]}}],raw:"SiteNavigationLinkType[]"},description:""}}};export{s as A};
