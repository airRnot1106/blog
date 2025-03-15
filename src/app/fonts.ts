import { Zen_Kaku_Gothic_New } from 'next/font/google';
import localFont from 'next/font/local';

export const zenkaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  variable: '--font-zenkaku',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const ich1q = localFont({
  src: './ich1Q-hand-Regular.ttf',
  variable: '--font-ich1q',
  adjustFontFallback: false,
});
