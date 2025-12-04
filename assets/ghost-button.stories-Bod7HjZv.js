import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{w as k,u as C,e as G,f as z}from"./index-BZkcKs8Z.js";import{c as l}from"./css-iA79nXp1.js";import{G as n}from"./ghost-button-DVSEpKed.js";import{A as w}from"./arrow-right-D7Wq1-Ln.js";import"./jsx-runtime-Bw5QeaCk.js";import"./cx-BFURdk0p.js";import"./button-CFgMdbM0.js";import"./cva-CuDB4TaM.js";import"./createLucideIcon-BQJUwLQr.js";import"./index-DDr4uD8U.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Za3YRiuF.js";const J={component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{className:l({padding:"1rem"}),children:e.jsx(t,{})})]},c=z(),s={render:()=>e.jsx(n,{onClick:c,size:"md",children:"Button"}),play:async({canvasElement:t})=>{const i=k(t).getByRole("button");await C.click(i),G(c).toHaveBeenCalled()}},o={render:()=>e.jsx("ul",{className:l({display:"flex",alignItems:"center",gap:"1rem"}),children:["fit-content","xs","sm","md","lg","xl"].map(t=>e.jsx("li",{children:e.jsx(n,{size:t,children:"Button"})},t))})},a={render:()=>e.jsx(n,{className:l({columnGap:"0.25rem"}),icon:e.jsx(w,{}),iconPosition:"right",size:"md",children:"もっとみる"})},r={render:()=>e.jsx(n,{disabled:!0,onClick:c,size:"md",children:"Button"}),play:async({canvasElement:t})=>{const i=k(t).getByRole("button");await C.click(i),G(c).not.toHaveBeenCalled()}};var m,u,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const K=["Default","Size","Icon","Disabled"];export{s as Default,r as Disabled,a as Icon,o as Size,K as __namedExportsOrder,J as default};
