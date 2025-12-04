import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{w as b,u as k,e as C,f as z}from"./index-BZkcKs8Z.js";import{c as i}from"./css-iA79nXp1.js";import{N as n}from"./normal-button-Be3dRcwo.js";import{A as w}from"./arrow-right-D7Wq1-Ln.js";import"./jsx-runtime-Bw5QeaCk.js";import"./cx-BFURdk0p.js";import"./button-CFgMdbM0.js";import"./cva-CuDB4TaM.js";import"./createLucideIcon-BQJUwLQr.js";import"./index-DDr4uD8U.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Za3YRiuF.js";const J={component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{className:i({padding:"1rem"}),children:e.jsx(t,{})})]},c=z(),a={render:()=>e.jsx(n,{onClick:c,size:"md",children:"Button"}),play:async({canvasElement:t})=>{const l=b(t).getByRole("button");await k.click(l),C(c).toHaveBeenCalled()}},r={render:()=>e.jsx("ul",{className:i({display:"flex",alignItems:"center",gap:"1rem"}),children:["fit-content","xs","sm","md","lg","xl"].map(t=>e.jsx("li",{children:e.jsx(n,{size:t,children:"Button"})},t))})},s={render:()=>e.jsx(n,{className:i({columnGap:"0.25rem"}),icon:e.jsx(w,{}),iconPosition:"right",size:"md",children:"もっとみる"})},o={render:()=>e.jsx(n,{disabled:!0,onClick:c,size:"md",children:"Button"}),play:async({canvasElement:t})=>{const l=b(t).getByRole("button");await k.click(l),C(c).not.toHaveBeenCalled()}};var m,u,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <NormalButton onClick={handleClick} size="md">
        Button
      </NormalButton>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,B,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <NormalButton size={size}>Button</NormalButton>
            </li>)}
      </ul>;
  }
}`,...(x=(B=r.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var g,v,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <NormalButton className={css({
      columnGap: '0.25rem'
    })} icon={<ArrowRight />} iconPosition="right" size="md">
        もっとみる
      </NormalButton>;
  }
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,f,N;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <NormalButton disabled onClick={handleClick} size="md">
        Button
      </NormalButton>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  }
}`,...(N=(f=o.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const K=["Default","Size","Icon","Disabled"];export{a as Default,o as Disabled,s as Icon,r as Size,K as __namedExportsOrder,J as default};
