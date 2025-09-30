export const attendedEvents = [
  {
    title: 'Nix meetup #1',
    url: 'https://nix-ja.connpass.com/event/330557/',
    dates: ['2024-10-26'],
  },
  {
    title: 'VimConf 2024',
    url: 'https://vimconf.org/2024/',
    dates: ['2024-11-23'],
  },
  {
    title: 'TSKaigi 2025',
    url: 'https://2025.tskaigi.org/',
    dates: ['2025-05-23', '2025-05-24'],
  },
  {
    title: 'TSKaigi 2025事後勉強会 —— まだまだ型りたい',
    url: 'https://smarthr.connpass.com/event/355359/',
    dates: ['2025-06-06'],
  },
  {
    title: '「LAPRASもくもく会」6月',
    url: 'https://lapras.connpass.com/event/355384/',
    dates: ['2025-06-18'],
  },
  {
    title: 'CoLab Conf',
    url: 'https://supporterz-seminar.connpass.com/event/355775/',
    dates: ['2025-07-13'],
  },
  {
    title: 'Biome v2リリース記念 公式LTパーティ',
    url: 'https://bitkey.connpass.com/event/357744/',
    dates: ['2025-07-23'],
  },
  {
    title: 'フロントエンドカンファレンス東京2025',
    url: 'https://fec-tokyo.github.io/2025/',
    dates: ['2025-09-21'],
  },
  {
    title: 'フロントエンドカンファレンス関西2025',
    url: 'https://frontend-conf.osaka.jp/',
    dates: ['2025-11-30'],
  },
] as const satisfies {
  title: string;
  url: string;
  dates: `${number}-${number}-${number}`[];
}[];
