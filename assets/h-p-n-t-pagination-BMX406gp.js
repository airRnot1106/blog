import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{c as d}from"./css-iA79nXp1.js";import{L as o}from"./link-button-PGTB6cWq.js";import{c}from"./createLucideIcon-dVToDc26.js";/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]],u=c("chevron-first",f);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]],y=c("chevron-last",x);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],j=c("chevron-left",N);/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_=c("chevron-right",z),t=d({columnGap:"0.5rem"}),r="sm",a=18,$=({href:i,currentPage:n,totalPage:s,className:m})=>{const l=`${i}/1`,h=`${i}/${n>s?s:n-1}`,p=`${i}/${n+1}`,v=`${i}/${s}`;return e.jsx("nav",{className:m,children:e.jsxs("div",{className:d({display:"inline-grid",gridAutoFlow:"column",alignItems:"center",columnGap:"1rem"}),children:[e.jsx(o,{"aria-label":"最初のページへ",disabled:n<=1,href:l,size:r,variant:"normal",children:e.jsx(u,{className:t,size:a})}),e.jsx(o,{className:t,disabled:n<=1,href:h,icon:e.jsx(j,{size:a}),iconPosition:"left",size:r,variant:"normal",children:"前のページへ"}),e.jsx("span",{className:d({fontWeight:"bold"}),children:n}),e.jsx(o,{className:t,disabled:n>=s,href:p,icon:e.jsx(_,{size:a}),iconPosition:"right",size:r,variant:"normal",children:"次のページへ"}),e.jsx(o,{"aria-label":"最後のページへ",disabled:n>=s,href:v,size:r,variant:"normal",children:e.jsx(y,{className:t,size:a})})]})})};$.__docgenInfo={description:"",methods:[],displayName:"HPNTPagination",props:{href:{required:!0,tsType:{name:"string"},description:""},currentPage:{required:!0,tsType:{name:"number"},description:""},totalPage:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};export{$ as H};
