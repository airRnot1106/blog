import{j as a}from"./jsx-runtime-DoEZbXM1.js";import{w as v,u as i,e as n}from"./index-BZkcKs8Z.js";import{c as f}from"./css-iA79nXp1.js";import{S as c}from"./site-theme-toggle-button-CzXzooJC.js";import"./jsx-runtime-Bw5QeaCk.js";import"./cx-BFURdk0p.js";import"./cva-CuDB4TaM.js";import"./button-abs7jE4F.js";import"./ghost-button-DVSEpKed.js";import"./button-CFgMdbM0.js";import"./normal-button-Be3dRcwo.js";import"./index-DDr4uD8U.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Za3YRiuF.js";import"./panic-helper-BEWS6D6P.js";import"./contexts-C6b2_pfF.js";import"./createLucideIcon-BQJUwLQr.js";const C={component:c,tags:["autodocs"],parameters:{layout:"fullscreen"}},r={render:()=>a.jsx(c,{}),play:async({canvasElement:e})=>{const t=v(e).getByRole("switch");await i.click(t),n(t).toHaveAttribute("aria-checked","false"),n(document.documentElement.getAttribute("data-theme")).toBe("light"),await i.click(t),n(t).toHaveAttribute("aria-checked","true"),n(document.documentElement.getAttribute("data-theme")).toBe("dark")}},s={render:()=>a.jsx("ul",{className:f({display:"flex",alignItems:"center",gap:"1rem","& > li":{display:"grid",alignItems:"center"}}),children:["fit-content","xs","sm","md","lg","xl"].map(e=>a.jsx("li",{children:a.jsx(c,{size:e})},e))})},o={render:()=>a.jsx(c,{disabled:!0}),play:async({canvasElement:e})=>{const t=v(e).getByRole("switch");n(t).toBeDisabled()}};var m,l,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <SiteThemeToggleButton />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('switch');
    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-checked', 'false');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-checked', 'true');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,p,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <ul className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      '& > li': {
        display: 'grid',
        alignItems: 'center'
      }
    })}>
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <li key={size}>
              <SiteThemeToggleButton size={size} />
            </li>)}
      </ul>;
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,h,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <SiteThemeToggleButton disabled />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('switch');
    expect(button).toBeDisabled();
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const F=["Default","Size","Disabled"];export{r as Default,o as Disabled,s as Size,F as __namedExportsOrder,C as default};
