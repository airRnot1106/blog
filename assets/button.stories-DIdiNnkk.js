import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{w as k,u as C,e as j,f as w}from"./index-BZkcKs8Z.js";import{c as l}from"./css-iA79nXp1.js";import{B as n}from"./button-CFgMdbM0.js";import{A as E}from"./arrow-right-D7Wq1-Ln.js";import"./jsx-runtime-Bw5QeaCk.js";import"./cx-BFURdk0p.js";import"./cva-CuDB4TaM.js";import"./createLucideIcon-BQJUwLQr.js";import"./index-DDr4uD8U.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Za3YRiuF.js";const F={component:n,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{className:l({padding:"1rem"}),children:e.jsx(t,{})})]},c=w(),s={render:()=>e.jsx(n,{onClick:c,size:"md",children:"Button"}),play:async({canvasElement:t})=>{const i=k(t).getByRole("button");await C.click(i),j(c).toHaveBeenCalled()}},a={render:()=>e.jsx("ul",{className:l({display:"flex",alignItems:"center",gap:"1rem"}),children:["fit-content","xs","sm","md","lg","xl"].map(t=>e.jsx("li",{children:e.jsx(n,{size:t,children:"Button"})},t))})},r={render:()=>e.jsx(n,{className:l({columnGap:"0.25rem"}),icon:e.jsx(E,{}),iconPosition:"right",size:"md",children:"もっとみる"})},o={render:()=>e.jsx(n,{disabled:!0,onClick:c,size:"md",children:"Button"}),play:async({canvasElement:t})=>{const i=k(t).getByRole("button");await C.click(i),j(c).not.toHaveBeenCalled()}};var m,u,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <Button onClick={handleClick} size="md">
        Button
      </Button>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,B,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <Button size={size}>Button</Button>
            </li>)}
      </ul>;
  }
}`,...(x=(B=a.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var g,v,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <Button className={css({
      columnGap: '0.25rem'
    })} icon={<ArrowRight />} iconPosition="right" size="md">
        もっとみる
      </Button>;
  }
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,f,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <Button disabled onClick={handleClick} size="md">
        Button
      </Button>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const J=["Default","Size","Icon","Disabled"];export{s as Default,o as Disabled,r as Icon,a as Size,J as __namedExportsOrder,F as default};
