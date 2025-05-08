import { css } from '../../styled-system/css';
import { LatestArticleCardList } from '../features/article/components/molecules/latest-article-card-list';
import { LatestArticleSection } from '../features/article/components/molecules/latest-article-section';
import { AttendedEventSection } from '../features/attended-event/components/molecules/attended-event-section';
import { LaprasImage } from '../features/lapras/components/atoms/lapras-image';
import { LaprasSection } from '../features/lapras/components/molecules/lapras-section';
import { ProfileSection } from '../features/profile/components/molecules/profile-section';
import { SiteContentLayout } from '../features/site-content/components/molecules/site-content-layout';

export default function Home() {
  return (
    <SiteContentLayout>
      <main>
        <hgroup
          className={css({
            display: 'grid',
            gridAutoFlow: 'row',
            justifyItems: 'center',
            rowGap: 'clamp(0.5rem, 0.273rem + 0.97vw, 1rem)',
            fontFamily: 'ich1q',
            paddingBlock: 'clamp(1rem, -0.364rem + 5.82vw, 4rem)',
            borderBottom: '1px solid',
            borderBottomColor: 'muted/20',
          })}
        >
          <h1
            className={css({
              fontSize: 'clamp(2rem, 0.182rem + 7.76vw, 6rem)',
            })}
          >
            airRnot.dev
          </h1>
          <p
            className={css({
              fontSize: 'clamp(1rem, 0.432rem + 2.42vw, 2.25rem)',
            })}
          >
            airRnot's blog
          </p>
        </hgroup>
        <ProfileSection
          className={css({
            marginTop: '2rem',
          })}
        />
        <LatestArticleSection
          className={css({
            marginTop: '2rem',
          })}
        >
          <LatestArticleCardList />
        </LatestArticleSection>
        <LaprasSection
          className={css({
            marginTop: '2rem',
          })}
        >
          <LaprasImage />
        </LaprasSection>
        <AttendedEventSection
          className={css({
            marginTop: '2rem',
          })}
        />
      </main>
    </SiteContentLayout>
  );
}
