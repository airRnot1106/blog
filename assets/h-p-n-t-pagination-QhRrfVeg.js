import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{u as v,a as x}from"./index-0yD-mwFQ.js";import{c as d}from"./css-iA79nXp1.js";import{L as o}from"./link-button-PGTB6cWq.js";import{c as m}from"./createLucideIcon-dVToDc26.js";/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]],S=m("chevron-first",N);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]],y=m("chevron-last",j);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],$=m("chevron-left",z);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],b=m("chevron-right",_),a=d({columnGap:"0.5rem"}),r="sm",c=18,k=({currentPage:n,totalPage:i,className:l})=>{const t=v(),h=x(),s=new URLSearchParams(h.toString());s.set("page","1");const p=`${t}?${s.toString()}`;s.set("page",n>i?i.toString():(n-1).toString());const f=`${t}?${s.toString()}`;s.set("page",(n+1).toString());const g=`${t}?${s.toString()}`;s.set("page",i.toString());const u=`${t}?${s.toString()}`;return e.jsx("nav",{className:l,children:e.jsxs("div",{className:d({display:"inline-grid",gridAutoFlow:"column",alignItems:"center",columnGap:"1rem"}),children:[e.jsx(o,{"aria-label":"最初のページへ",disabled:n<=1,href:p,size:r,variant:"normal",children:e.jsx(S,{className:a,size:c})}),e.jsx(o,{className:a,disabled:n<=1,href:f,icon:e.jsx($,{size:c}),iconPosition:"left",size:r,variant:"normal",children:"前のページへ"}),e.jsx("span",{className:d({fontWeight:"bold"}),children:n}),e.jsx(o,{className:a,disabled:n>=i,href:g,icon:e.jsx(b,{size:c}),iconPosition:"right",size:r,variant:"normal",children:"次のページへ"}),e.jsx(o,{"aria-label":"最後のページへ",disabled:n>=i,href:u,size:r,variant:"normal",children:e.jsx(y,{className:a,size:c})})]})})};k.__docgenInfo={description:"",methods:[],displayName:"HPNTPagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPage:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};export{k as H};
