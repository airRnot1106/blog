import { SelfIntroductionSection } from '@/features/self-introduction/components/molecules/self-introduction-section/self-introduction-section';
import { SiteTitle } from '@/features/site-title/components/atoms/site-title/site-title';
import { SiteLayout } from '@/features/site/components/molecules/site-layout';
import { ZennArticleSection } from '@/features/zenn-article/components/molecules/zenn-article-section';

export default function Home() {
  return (
    <SiteLayout className="grid grid-cols-[5%_[content-start]_1fr_[content-end]_5%] justify-start">
      <div className="grid col-[content] content-start gap-y-[clamp(1rem,0.636rem_+_1.82vw,2rem)]">
        <SiteTitle
          title="airRnot.dev"
          subtitle="airRnot's blog"
          className="py-[clamp(2rem,1.273rem_+_3.64vw,4rem)] border-b border-b-muted/20"
        />
        <SelfIntroductionSection />
        <ZennArticleSection username="airrnot1106" />
      </div>
    </SiteLayout>
  );
}
