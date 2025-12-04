import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{c as i}from"./css-iA79nXp1.js";import{L as t}from"./link-button-PGTB6cWq.js";import{c as d}from"./createLucideIcon-BQJUwLQr.js";/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]],f=d("chevron-first",v);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]],N=d("chevron-last",u);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],y=d("chevron-left",j);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],_=d("chevron-right",z),a=i({columnGap:"0.5rem"}),r="sm",c=18,$=({href:o,currentPage:s,totalPage:n,className:l})=>{const m=`${o}/1`,h=`${o}/${s>n?n:s-1}`,p=`${o}/${s+1}`,x=`${o}/${n}`;return e.jsx("nav",{className:l,children:e.jsxs("div",{className:i({display:"inline-grid",gridAutoFlow:"column",alignItems:"center",columnGap:"1rem"}),children:[e.jsx(t,{"aria-label":"最初のページへ",disabled:s<=1,href:m,size:r,variant:"normal",children:e.jsx(f,{className:a,size:c})}),e.jsx(t,{className:a,disabled:s<=1,href:h,icon:e.jsx(y,{size:c}),iconPosition:"left",size:r,variant:"normal",children:e.jsx("span",{className:i({hideBelow:"sm"}),children:"前のページへ"})}),e.jsx("span",{className:i({fontWeight:"bold"}),children:s}),e.jsx(t,{className:a,disabled:s>=n,href:p,icon:e.jsx(_,{size:c}),iconPosition:"right",size:r,variant:"normal",children:e.jsx("span",{className:i({hideBelow:"sm"}),children:"次のページへ"})}),e.jsx(t,{"aria-label":"最後のページへ",disabled:s>=n,href:x,size:r,variant:"normal",children:e.jsx(N,{className:a,size:c})})]})})};$.__docgenInfo={description:"",methods:[],displayName:"HPNTPagination",props:{href:{required:!0,tsType:{name:"string"},description:""},currentPage:{required:!0,tsType:{name:"number"},description:""},totalPage:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};export{$ as H};
