export const attendedEvents = [
  {
    title: 'Nix meetup #1',
    url: 'https://nix-ja.connpass.com/event/330557/',
    dates: ['2023-10-26'],
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
] as const satisfies {
  title: string;
  url: string;
  dates: `${number}-${number}-${number}`[];
}[];
