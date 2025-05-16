import{j as r}from"./jsx-runtime-DoEZbXM1.js";import{c as u}from"./css-iA79nXp1.js";import{P as X}from"./pagination-DCQxSOGz.js";import{a as D}from"./article-card-DVs-F8TD.js";import{A as I}from"./article-card-list-CiqEb6uW.js";import{c as E}from"./cx-BFURdk0p.js";import{H}from"./heading-CEno6Knd.js";import"./jsx-runtime-Bw5QeaCk.js";import"./h-p-n-t-pagination-QhRrfVeg.js";import"./index-0yD-mwFQ.js";import"./index-BZkcKs8Z.js";import"./index-Za3YRiuF.js";import"./router-context.shared-runtime-C3rDQPqq.js";import"./add-base-path-Yz4dcL5G.js";import"./link-button-PGTB6cWq.js";import"./ghost-link-button--yl3mBX4.js";import"./link-button-DuVUI80S.js";import"./link-CiQcZn3-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./use-merged-ref-vu_KmdPm.js";import"./cva-CuDB4TaM.js";import"./button-abs7jE4F.js";import"./ghost-button-DVSEpKed.js";import"./button-CFgMdbM0.js";import"./normal-button-Be3dRcwo.js";import"./normal-link-button-BesB8lSN.js";import"./createLucideIcon-dVToDc26.js";import"./index-DDr4uD8U.js";import"./image-BcZ0HIHc.js";import"./index-DqQFE8CJ.js";import"./image-context-CYaGmMjm.js";import"./datetime-At4GKbE0.js";import"./heading-CsMin62-.js";import"./anchor-heading-BdPI4WXK.js";const l=({pagination:e,children:c,className:d,...T})=>r.jsxs("div",{className:E(d,u({display:"grid",gridAutoFlow:"row",justifyItems:"center",rowGap:"2rem"})),...T,children:[c,e]});l.__docgenInfo={description:"",methods:[],displayName:"ArticleCardPaginationListPresentational",props:{pagination:{required:!0,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const m=({children:e,className:c,...d})=>r.jsxs("section",{className:c,...d,children:[r.jsx(H,{as:"h2",subtitle:"わたしがかきました",title:"記事一覧"}),r.jsx("div",{className:u({display:"grid",justifyContent:"center",paddingBlock:"2rem"}),children:e})]});m.__docgenInfo={description:"",methods:[],displayName:"ArticleSection",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const wr={component:m,tags:["autodocs"],parameters:{layout:"fullscreen",nextjs:{appDirectory:!0,navigation:{pathname:"/articles"}}},decorators:[e=>r.jsx("div",{className:u({padding:"1rem"}),children:r.jsx(e,{})})]},a={parameters:{navigation:{query:{page:"2"}}},render:()=>r.jsx(m,{children:r.jsx(l,{pagination:r.jsx(X,{currentPage:2,totalPage:4,variant:"h-p-n-t"}),children:r.jsx(I,{articles:D})})})},t=r.jsx(m,{children:r.jsx(l,{pagination:r.jsx(X,{currentPage:2,totalPage:4,variant:"h-p-n-t"}),children:r.jsx(I,{articles:D})})}),n={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"xs"},parameters:{navigation:{query:{page:"2"}}}},render:()=>t},o={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"sm"},parameters:{navigation:{query:{page:"2"}}}},render:()=>t},s={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"md"},parameters:{navigation:{query:{page:"2"}}}},render:()=>t},i={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"lg"},parameters:{navigation:{query:{page:"2"}}}},render:()=>t},p={tags:["!autodocs"],parameters:{viewport:{defaultViewport:"xl"},parameters:{navigation:{query:{page:"2"}}}},render:()=>t};var g,v,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    navigation: {
      query: {
        page: '2'
      }
    }
  },
  render: () => {
    return <ArticleSection>
        <ArticleCardPaginationListPresentational pagination={<Pagination currentPage={2} totalPage={4} variant="h-p-n-t" />}>
          <ArticleCardList articles={articles} />
        </ArticleCardPaginationListPresentational>
      </ArticleSection>;
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,w,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,P,h;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(h=(P=o.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var q,S,C;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=(_=p.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const yr=["Default","XSmall","Small","Medium","Large","XLarge"];export{a as Default,i as Large,s as Medium,o as Small,p as XLarge,n as XSmall,yr as __namedExportsOrder,wr as default};
