import{j as n}from"./jsx-runtime-DoEZbXM1.js";import{w as j,e as a}from"./index-BZkcKs8Z.js";import{c as k}from"./css-iA79nXp1.js";import{H as i}from"./h-p-n-t-pagination-BMX406gp.js";import"./jsx-runtime-Bw5QeaCk.js";import"./link-button-PGTB6cWq.js";import"./ghost-link-button--yl3mBX4.js";import"./cx-BFURdk0p.js";import"./link-button-DuVUI80S.js";import"./link-CiQcZn3-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./router-context.shared-runtime-C3rDQPqq.js";import"./index-Za3YRiuF.js";import"./add-base-path-Yz4dcL5G.js";import"./use-merged-ref-vu_KmdPm.js";import"./cva-CuDB4TaM.js";import"./button-abs7jE4F.js";import"./ghost-button-DVSEpKed.js";import"./button-CFgMdbM0.js";import"./normal-button-Be3dRcwo.js";import"./normal-link-button-BesB8lSN.js";import"./createLucideIcon-dVToDc26.js";import"./index-DDr4uD8U.js";const X={component:i,tags:["autodocs"],parameters:{layout:"fullscreen",nextjs:{appDirectory:!0,navigation:{pathname:"/articles/page"}}},decorators:[e=>n.jsx("div",{className:k({padding:"1rem"}),children:n.jsx(e,{})})]},t={currentPage:2,totalPage:4,href:"/articles/page"},o={parameters:{navigation:{query:{page:"2"}}},render:()=>n.jsx(i,{...t}),play:async({canvasElement:e})=>{const r=j(e),P=r.getByRole("link",{name:"最初のページへ"}),v=r.getByRole("link",{name:"前のページへ"}),x=r.getByRole("link",{name:"次のページへ"}),y=r.getByRole("link",{name:"最後のページへ"}),$=P.getAttribute("href"),U=v.getAttribute("href"),R=x.getAttribute("href"),b=y.getAttribute("href");a($).toBe(`${t.href}/1`),a(U).toBe(`${t.href}/${t.currentPage-1}`),a(R).toBe(`${t.href}/${t.currentPage+1}`),a(b).toBe(`${t.href}/${t.totalPage}`)}},s={parameters:{navigation:{query:{page:"1"}}},render:()=>{const e={currentPage:1,totalPage:4,href:"/articles/page"};return n.jsx(i,{...e})}},p={parameters:{navigation:{query:{page:"4"}}},render:()=>{const e={currentPage:4,totalPage:4,href:"/articles/page"};return n.jsx(i,{...e})}};var c,u,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    navigation: {
      query: {
        page: '2'
      }
    }
  },
  render: () => {
    return <HPNTPagination {...props} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const headButton = canvas.getByRole('link', {
      name: '最初のページへ'
    });
    const prevButton = canvas.getByRole('link', {
      name: '前のページへ'
    });
    const nextButton = canvas.getByRole('link', {
      name: '次のページへ'
    });
    const tailButton = canvas.getByRole('link', {
      name: '最後のページへ'
    });
    const headButtonUrl = headButton.getAttribute('href');
    const prevButtonUrl = prevButton.getAttribute('href');
    const nextButtonUrl = nextButton.getAttribute('href');
    const tailButtonUrl = tailButton.getAttribute('href');
    expect(headButtonUrl).toBe(\`\${props.href}/1\`);
    expect(prevButtonUrl).toBe(\`\${props.href}/\${props.currentPage - 1}\`);
    expect(nextButtonUrl).toBe(\`\${props.href}/\${props.currentPage + 1}\`);
    expect(tailButtonUrl).toBe(\`\${props.href}/\${props.totalPage}\`);
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var m,g,B;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    navigation: {
      query: {
        page: '1'
      }
    }
  },
  render: () => {
    const props = {
      currentPage: 1,
      totalPage: 4,
      href: '/articles/page'
    };
    return <HPNTPagination {...props} />;
  }
}`,...(B=(g=s.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var d,h,f;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    navigation: {
      query: {
        page: '4'
      }
    }
  },
  render: () => {
    const props = {
      currentPage: 4,
      totalPage: 4,
      href: '/articles/page'
    };
    return <HPNTPagination {...props} />;
  }
}`,...(f=(h=p.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Y=["Default","Head","Tail"];export{o as Default,s as Head,p as Tail,Y as __namedExportsOrder,X as default};
