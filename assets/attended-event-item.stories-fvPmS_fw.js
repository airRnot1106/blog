import{j as n}from"./jsx-runtime-DoEZbXM1.js";import{c as u}from"./css-iA79nXp1.js";import{A as s,a as c}from"./attended-event-item-UJabE-86.js";import"./jsx-runtime-Bw5QeaCk.js";import"./cx-BFURdk0p.js";import"./link-BoCixU98.js";import"./underline-link-TgH5QTpO.js";import"./link-D4eE6uvR.js";import"./link-CwwPhB3g.js";import"./_commonjsHelpers-CqkleIqs.js";import"./router-context.shared-runtime-JvAHygqe.js";import"./index-Za3YRiuF.js";import"./add-base-path-BgZyUWYd.js";import"./use-merged-ref-vu_KmdPm.js";import"./date-BsyCO-N_.js";import"./panic-helper-BEWS6D6P.js";const F={title:"Features/AttendedEvent/Components/Atoms/AttendedEventItem",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[e=>n.jsx("div",{className:u({padding:"1rem"}),children:n.jsx(e,{})})]},t={render:()=>{const e=c[0];return n.jsx(s,{dates:e.dates.map(a=>new Date(a)),title:e.title,url:e.url})}},r={render:()=>{const e=c[2];return n.jsx(s,{dates:e.dates.map(a=>new Date(a)),title:e.title,url:e.url})}};var o,d,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const event = attendedEvents[0];
    return <AttendedEventItem dates={event.dates.map(date => new Date(date))} title={event.title} url={event.url} />;
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,i,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const event = attendedEvents[2];
    return <AttendedEventItem dates={event.dates.map(date => new Date(date))} title={event.title} url={event.url} />;
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const N=["Default","MultipleDates"];export{t as Default,r as MultipleDates,N as __namedExportsOrder,F as default};
