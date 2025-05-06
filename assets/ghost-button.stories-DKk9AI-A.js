import{j as t}from"./jsx-runtime-DoEZbXM1.js";import{w as k,u as C,e as G,f as z}from"./index-BZkcKs8Z.js";import{c as l}from"./css-iA79nXp1.js";import{G as n}from"./ghost-button-DVSEpKed.js";import{A as w}from"./arrow-right-BbXiIc01.js";import"./jsx-runtime-Bw5QeaCk.js";import"./cx-BFURdk0p.js";import"./button-CFgMdbM0.js";import"./cva-CuDB4TaM.js";import"./createLucideIcon-dVToDc26.js";import"./index-DDr4uD8U.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Za3YRiuF.js";const F={title:"Components/Atoms/Button/_Base/_Variant/Ghost/GhostButton",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[e=>t.jsx("div",{className:l({padding:"1rem"}),children:t.jsx(e,{})})]},c=z(),s={render:()=>t.jsx(n,{onClick:c,size:"md",children:"Button"}),play:async({canvasElement:e})=>{const i=k(e).getByRole("button");await C.click(i),G(c).toHaveBeenCalled()}},o={render:()=>t.jsx("ul",{className:l({display:"flex",alignItems:"center",gap:"1rem"}),children:["fit-content","xs","sm","md","lg","xl"].map(e=>t.jsx("li",{children:t.jsx(n,{size:e,children:"Button"})},e))})},a={render:()=>t.jsx(n,{className:l({columnGap:"0.25rem"}),icon:t.jsx(w,{}),iconPosition:"right",size:"md",children:"もっとみる"})},r={render:()=>t.jsx(n,{disabled:!0,onClick:c,size:"md",children:"Button"}),play:async({canvasElement:e})=>{const i=k(e).getByRole("button");await C.click(i),G(c).not.toHaveBeenCalled()}};var m,u,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <GhostButton onClick={handleClick} size="md">
        Button
      </GhostButton>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,h,B;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <GhostButton size={size}>Button</GhostButton>
            </li>)}
      </ul>;
  }
}`,...(B=(h=o.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var x,g,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <GhostButton className={css({
      columnGap: '0.25rem'
    })} icon={<ArrowRight />} iconPosition="right" size="md">
        もっとみる
      </GhostButton>;
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,f,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <GhostButton disabled onClick={handleClick} size="md">
        Button
      </GhostButton>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const J=["Default","Size","Icon","Disabled"];export{s as Default,r as Disabled,a as Icon,o as Size,J as __namedExportsOrder,F as default};
