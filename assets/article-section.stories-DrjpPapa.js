import{j as e}from"./jsx-runtime-DoEZbXM1.js";import{c as u}from"./css-iA79nXp1.js";import{P as X}from"./pagination-CzIv2VO9.js";import{a as D}from"./article-card-DVs-F8TD.js";import{A as I}from"./article-card-list-CiqEb6uW.js";import{c as E}from"./cx-BFURdk0p.js";import{H}from"./heading-BnI8KJgi.js";import"./jsx-runtime-Bw5QeaCk.js";import"./h-p-n-t-pagination-Nxq7PJWM.js";import"./link-button-PGTB6cWq.js";import"./ghost-link-button--yl3mBX4.js";import"./link-button-DuVUI80S.js";import"./link-CiQcZn3-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./router-context.shared-runtime-C3rDQPqq.js";import"./index-Za3YRiuF.js";import"./add-base-path-Yz4dcL5G.js";import"./use-merged-ref-vu_KmdPm.js";import"./cva-CuDB4TaM.js";import"./button-abs7jE4F.js";import"./ghost-button-DVSEpKed.js";import"./button-CFgMdbM0.js";import"./normal-button-Be3dRcwo.js";import"./normal-link-button-BesB8lSN.js";import"./createLucideIcon-BQJUwLQr.js";import"./index-DDr4uD8U.js";import"./image-BcZ0HIHc.js";import"./index-DqQFE8CJ.js";import"./image-context-CYaGmMjm.js";import"./datetime-At4GKbE0.js";import"./heading-D3iJmADT.js";import"./anchor-heading-CuW7c8VP.js";const l=({pagination:r,children:c,className:d,...T})=>e.jsxs("div",{className:E(d,u({display:"grid",gridAutoFlow:"row",justifyItems:"center",rowGap:"2rem"})),...T,children:[c,r]});l.__docgenInfo={description:"",methods:[],displayName:"ArticleCardPaginationListPresentational",props:{pagination:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const m=({children:r,className:c,...d})=>e.jsxs("section",{className:c,...d,children:[e.jsx(H,{as:"h2",size:"clamp",subtitle:"わたしがかきました",title:"記事一覧"}),e.jsx("div",{className:u({display:"grid",justifyContent:"center",paddingBlock:"2rem"}),children:r})]});m.__docgenInfo={description:"",methods:[],displayName:"ArticleSection",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const fe={component:m,tags:["autodocs"],parameters:{layout:"fullscreen",nextjs:{appDirectory:!0,navigation:{pathname:"/articles/page"}}},decorators:[r=>e.jsx("div",{className:u({padding:"1rem"}),children:e.jsx(r,{})})]},t={parameters:{navigation:{query:{page:"2"}}},render:()=>e.jsx(m,{children:e.jsx(l,{pagination:e.jsx(X,{currentPage:2,href:"/articles/page",totalPage:4,variant:"h-p-n-t"}),children:e.jsx(I,{articles:D})})})},a=e.jsx(m,{children:e.jsx(l,{pagination:e.jsx(X,{currentPage:2,href:"/articles/page",totalPage:4,variant:"h-p-n-t"}),children:e.jsx(I,{articles:D})})}),n={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"xs"},parameters:{navigation:{query:{page:"2"}}}},render:()=>a},o={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"sm"},parameters:{navigation:{query:{page:"2"}}}},render:()=>a},s={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"md"},parameters:{navigation:{query:{page:"2"}}}},render:()=>a},i={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"lg"},parameters:{navigation:{query:{page:"2"}}}},render:()=>a},p={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"xl"},parameters:{navigation:{query:{page:"2"}}}},render:()=>a};var g,v,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    navigation: {
      query: {
        page: '2'
      }
    }
  },
  render: () => {
    return <ArticleSection>
        <ArticleCardPaginationListPresentational pagination={<Pagination currentPage={2} href="/articles/page" totalPage={4} variant="h-p-n-t" />}>
          <ArticleCardList articles={articles} />
        </ArticleCardPaginationListPresentational>
      </ArticleSection>;
  }
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,w,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xs'
    },
    parameters: {
      navigation: {
        query: {
          page: '2'
        }
      }
    }
  },
  render: () => {
    return Component;
  }
}`,...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var h,j,P;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'sm'
    },
    parameters: {
      navigation: {
        query: {
          page: '2'
        }
      }
    }
  },
  render: () => {
    return Component;
  }
}`,...(P=(j=o.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var q,S,C;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'md'
    },
    parameters: {
      navigation: {
        query: {
          page: '2'
        }
      }
    }
  },
  render: () => {
    return Component;
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var A,L,V;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'lg'
    },
    parameters: {
      navigation: {
        query: {
          page: '2'
        }
      }
    }
  },
  render: () => {
    return Component;
  }
}`,...(V=(L=i.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var N,_,R;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xl'
    },
    parameters: {
      navigation: {
        query: {
          page: '2'
        }
      }
    }
  },
  render: () => {
    return Component;
  }
}`,...(R=(_=p.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const xe=["Default","XSmall","Small","Medium","Large","XLarge"];export{t as Default,i as Large,s as Medium,o as Small,p as XLarge,n as XSmall,xe as __namedExportsOrder,fe as default};
