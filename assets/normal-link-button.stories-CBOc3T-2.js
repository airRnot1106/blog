import{j as r}from"./jsx-runtime-DoEZbXM1.js";import{c as a}from"./css-iA79nXp1.js";import{N as n}from"./normal-link-button-Bx_RbtcT.js";import{A as h}from"./arrow-right-BbXiIc01.js";import"./jsx-runtime-Bw5QeaCk.js";import"./cx-BFURdk0p.js";import"./link-button-RjRGtlu-.js";import"./link-CwwPhB3g.js";import"./_commonjsHelpers-CqkleIqs.js";import"./router-context.shared-runtime-JvAHygqe.js";import"./index-Za3YRiuF.js";import"./add-base-path-BgZyUWYd.js";import"./use-merged-ref-vu_KmdPm.js";import"./button-abs7jE4F.js";import"./ghost-button-DVSEpKed.js";import"./button-CFgMdbM0.js";import"./cva-CuDB4TaM.js";import"./normal-button-Be3dRcwo.js";import"./createLucideIcon-dVToDc26.js";import"./index-DDr4uD8U.js";const O={title:"Components/Atoms/LinkButton/_Base/_Variant/Normal/NormalLinkButton",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[e=>r.jsx("div",{className:a({padding:"1rem"}),children:r.jsx(e,{})})]},t={render:()=>r.jsx(n,{href:"#",size:"md",children:"Button"})},o={render:()=>r.jsx("ul",{className:a({display:"flex",alignItems:"center",gap:"1rem"}),children:["fit-content","xs","sm","md","lg","xl"].map(e=>r.jsx("li",{children:r.jsx(n,{href:"#",size:e,children:"Button"})},e))})},s={render:()=>r.jsx(n,{className:a({columnGap:"0.25rem"}),href:"#",icon:r.jsx(h,{}),iconPosition:"right",size:"md",children:"もっとみる"})};var i,m,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <NormalLinkButton href="#" size="md">
        Button
      </NormalLinkButton>;
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,p,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <NormalLinkButton href="#" size={size}>
                Button
              </NormalLinkButton>
            </li>)}
      </ul>;
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,f,x;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <NormalLinkButton className={css({
      columnGap: '0.25rem'
    })} href="#" icon={<ArrowRight />} iconPosition="right" size="md">
        もっとみる
      </NormalLinkButton>;
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const V=["Default","Size","Icon"];export{t as Default,s as Icon,o as Size,V as __namedExportsOrder,O as default};
