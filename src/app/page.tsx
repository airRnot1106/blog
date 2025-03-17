'use cache';

import { SelfIntroductionSection } from '@/features/self-introduction/components/molecules/self-introduction-section/self-introduction-section';
import { SiteTitle } from '@/features/site-title/components/atoms/site-title/site-title';
import { SiteLayout } from '@/features/site/components/molecules/site-layout';
import { ZennArticleSection } from '@/features/zenn-article/components/molecules/zenn-article-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'airRnot.dev',
  icons:
    'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>✈️</text></svg>',
};

export default async function Home() {
  return (
    <SiteLayout className="grid grid-cols-[2%_[content-start]_1fr_[content-end]_2%] sm:grid-cols-[5%_[content-start]_1fr_[content-end]_5%] justify-start">
      <div className="grid col-[content] content-start gap-y-[clamp(1rem,0.636rem_+_1.82vw,2rem)]">
        <SiteTitle
          title="airRnot.dev"
          subtitle="airRnot's blog"
          className="py-[clamp(2rem,1.273rem_+_3.64vw,4rem)] border-b border-b-muted/20"
        />
        <SelfIntroductionSection />
        <ZennArticleSection username="airrnot1106" className="mb-12" />
      </div>
    </SiteLayout>
  );
}
