import{j as r}from"./jsx-runtime-DoEZbXM1.js";import{r as o}from"./index-DDr4uD8U.js";import{c as s}from"./css-iA79nXp1.js";import{c as m}from"./cx-BFURdk0p.js";import{L as l}from"./link-button-DcK4i4oQ.js";const u=({links:i,className:t,...n})=>r.jsx("ul",{className:m(t,s({display:"inline-grid",gridAutoFlow:"column",columnGap:"0.25rem"})),...n,children:i.map(e=>{const a=o.cloneElement(e.icon,{"aria-label":e.label,role:"img"});return r.jsx("li",{children:r.jsx(l,{href:e.href,size:"md",variant:"ghost",children:a})},e.id)})});u.__docgenInfo={description:"",methods:[],displayName:"ButtonSiteNavigationLinkList",props:{links:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  label: string;
  href: string;
  icon: ReactElement;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactElement",required:!0}}]}}],raw:"SiteNavigationLinkType[]"},description:""}}};export{u as B};
