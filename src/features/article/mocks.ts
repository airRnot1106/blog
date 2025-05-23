import type { Article } from './schemas';

export const articles = [
  {
    id: '1',
    href: 'https://zenn.dev/airrnot1106/articles/1ff694aedc953b',
    createdAt: new Date('2025-04-26T00:00:00Z'),
    src: 'https://res.cloudinary.com/zenn/image/upload/s--Jbi7NKTs--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:Next.js%252015%2520%2526%2520Storybook%2520v8.6%25E3%2581%25A7SVGR%25E3%2582%2592%25E5%25B0%258E%25E5%2585%25A5%25E3%2581%2599%25E3%2582%258B%25E6%2596%25B9%25E6%25B3%2595%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:airRnot%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2MxYzlkMTkxNjQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png',
    title: 'Next.js 15 & Storybook v8.6でSVGRを導入する方法',
    isExternalSite: true,
  },
  {
    id: '2',
    href: 'https://qiita.com/airRnot1106/items/aff1415a052f65ec0be4',
    createdAt: new Date('2024-06-09T00:00:00Z'),
    src: 'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-user-contents.imgix.net%2Fhttps%253A%252F%252Fcdn.qiita.com%252Fassets%252Fpublic%252Farticle-ogp-background-afbab5eb44e0b055cce1258705637a91.png%3Fixlib%3Drb-4.0.0%26w%3D1200%26blend64%3DaHR0cHM6Ly9xaWl0YS11c2VyLXByb2ZpbGUtaW1hZ2VzLmltZ2l4Lm5ldC9odHRwcyUzQSUyRiUyRnFpaXRhLWltYWdlLXN0b3JlLnMzLmFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb20lMkYwJTJGMTAyNzg2MyUyRnByb2ZpbGUtaW1hZ2VzJTJGMTY5MzgzNjU1Nj9peGxpYj1yYi00LjAuMCZhcj0xJTNBMSZmaXQ9Y3JvcCZtYXNrPWVsbGlwc2UmZm09cG5nMzImcz0zMDJlNjVmNTg2ZjFlMjA1ZGJjNWMxZmE5ODIxZTcxNQ%26blend-x%3D120%26blend-y%3D467%26blend-w%3D82%26blend-h%3D82%26blend-mode%3Dnormal%26s%3D0652fed6c8076b00c48b7c39596c0d12?ixlib=rb-4.0.0&w=1200&fm=jpg&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTk2MCZoPTMyNCZ0eHQ9JUUzJTgwJTkwTmV4dC5qcyVFMyU4MCU5MSVFNCVCQiVBRSVFNiU4MyVCMyVFNyU5MiVCMCVFNSVBMiU4MyVFMyU4MSVBN25leHQlMjBkZXYlRTMlODElOTclRTMlODElOUYlRTMlODElQTglRTMlODElOEQlRTMlODElQUIlRTMlODMlOUIlRTMlODIlQjklRTMlODMlODglRTMlODMlOUUlRTMlODIlQjclRTMlODMlQjMlRTMlODElOEIlRTMlODIlODklRTglQTYlOEIlRTMlODIlODklRTMlODIlOEMlRTMlODIlOEIlRTMlODIlODglRTMlODElODYlRTMlODElQUIlRTMlODElOTklRTMlODIlOEIlRTYlOTYlQjklRTYlQjMlOTUmdHh0LWFsaWduPWxlZnQlMkN0b3AmdHh0LWNvbG9yPSUyMzFFMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtcGFkPTAmcz02MGEwOTY4OGJiNWIxYjM1NDhlOWRkN2Y3NzdmZDQ0Mg&mark-x=120&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTgzOCZoPTU4JnR4dD0lNDBhaXJSbm90MTEwNiZ0eHQtY29sb3I9JTIzMUUyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1wYWQ9MCZzPTQ1NDhhMWIwNDJiZjEyOWY5MDU4YWU2NzFhMmFmNzY0&blend-x=242&blend-y=480&blend-w=838&blend-h=46&blend-fit=crop&blend-crop=left%2Cbottom&blend-mode=normal&s=cc29c48d7d3b10002bbbff359e136bf6',
    title:
      '【Next.js】仮想環境でnext devしたときにホストマシンから見られるようにする方法',
    isExternalSite: true,
  },
  {
    id: '3',
    href: 'https://zenn.dev/airrnot1106/articles/7543bcf6033d62',
    createdAt: new Date('2025-03-10T00:00:00Z'),
    src: 'https://res.cloudinary.com/zenn/image/upload/s--kqHEV0ns--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:BCD%2520Design%25E3%2581%25AB%25E3%2581%258A%25E3%2581%2591%25E3%2582%258B%25E5%2585%25B1%25E9%2580%259A%25E9%2583%25A8%25E5%2588%2586%25E3%2582%2592%25E3%2582%25B9%25E3%2583%259E%25E3%2583%25BC%25E3%2583%2588%25E3%2581%25AB%25E7%25AE%25A1%25E7%2590%2586%25E3%2581%2599%25E3%2582%258B%25E3%2583%2587%25E3%2582%25A3%25E3%2583%25AC%25E3%2582%25AF%25E3%2583%2588%25E3%2583%25AA%25E6%25A7%258B%25E6%2588%2590%25E3%2581%258B%25E3%2582%2589%25E5%25AD%25A6%25E3%2582%2593%25E3%2581%25A0%25E3%2581%2593%25E3%2581%25A8%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:airRnot%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyL2MxYzlkMTkxNjQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png',
    title:
      'BCD Designにおける共通部分をスマートに管理するディレクトリ構成から学んだこと',
    isExternalSite: true,
  },
  {
    id: '4',
    href: 'https://qiita.com/airRnot1106/items/e504fdd0b3bc0d01b69e',
    createdAt: new Date('2025-03-15T00:00:00Z'),
    src: 'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-user-contents.imgix.net%2Fhttps%253A%252F%252Fcdn.qiita.com%252Fassets%252Fpublic%252Farticle-ogp-background-afbab5eb44e0b055cce1258705637a91.png%3Fixlib%3Drb-4.0.0%26w%3D1200%26blend64%3DaHR0cHM6Ly9xaWl0YS11c2VyLXByb2ZpbGUtaW1hZ2VzLmltZ2l4Lm5ldC9odHRwcyUzQSUyRiUyRnFpaXRhLWltYWdlLXN0b3JlLnMzLmFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb20lMkYwJTJGMTAyNzg2MyUyRnByb2ZpbGUtaW1hZ2VzJTJGMTY5MzgzNjU1Nj9peGxpYj1yYi00LjAuMCZhcj0xJTNBMSZmaXQ9Y3JvcCZtYXNrPWVsbGlwc2UmZm09cG5nMzImcz0zMDJlNjVmNTg2ZjFlMjA1ZGJjNWMxZmE5ODIxZTcxNQ%26blend-x%3D120%26blend-y%3D467%26blend-w%3D82%26blend-h%3D82%26blend-mode%3Dnormal%26s%3D0652fed6c8076b00c48b7c39596c0d12?ixlib=rb-4.0.0&w=1200&fm=jpg&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTk2MCZoPTMyNCZ0eHQ9TmV4dC5qcyUyMDE1JTIwJTI2JTIwUGFuZGElMjBDU1MlMjAlMjYlMjBQYXJrJTIwVUklMjAlMjYlMjBWaXRlc3QlMjAlMjYlMjBTdG9yeWJvb2slRTMlODElQTclRTMlODMlOTUlRTMlODMlQUQlRTMlODMlQjMlRTMlODMlODglRTMlODIlQTglRTMlODMlQjMlRTMlODMlODklRTclOTIlQjAlRTUlQTIlODMlRTYlQTclOEIlRTclQUYlODkmdHh0LWFsaWduPWxlZnQlMkN0b3AmdHh0LWNvbG9yPSUyMzFFMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT01NiZ0eHQtcGFkPTAmcz1kMzNjMGYxNzc3NWU1NGQ1NjRlODBhYjliODgxZDg3NA&mark-x=120&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTgzOCZoPTU4JnR4dD0lNDBhaXJSbm90MTEwNiZ0eHQtY29sb3I9JTIzMUUyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTM2JnR4dC1wYWQ9MCZzPTQ1NDhhMWIwNDJiZjEyOWY5MDU4YWU2NzFhMmFmNzY0&blend-x=242&blend-y=480&blend-w=838&blend-h=46&blend-fit=crop&blend-crop=left%2Cbottom&blend-mode=normal&s=e15c985b4a5ba6069a9ed31cce8df45d',
    title:
      'Next.js 15 & Panda CSS & Park UI & Vitest & Storybookでフロントエンド環境構築',
    isExternalSite: true,
  },
] as const satisfies Article[];
