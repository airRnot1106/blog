import { Undo2 } from 'lucide-react';
import { css } from '../../styled-system/css';
import { LinkButton } from '../components/atoms/link-button';
import { SiteContentLayout } from '../features/site-content/components/molecules/site-content-layout';

export default function NotFound() {
  return (
    <SiteContentLayout
      className={css({
        height: '100%',
      })}
    >
      <div
        className={css({
          display: 'grid',
          gridAutoFlow: 'row',
          alignContent: 'center',
          justifyItems: 'center',
          rowGap: '2rem',
          height: '100%',
        })}
      >
        <hgroup
          className={css({
            display: 'inline-grid',
            gridAutoFlow: 'row',
            justifyItems: 'center',
          })}
        >
          <h1
            className={css({
              fontSize: '8xl',
              fontWeight: 'bold',
            })}
          >
            404
          </h1>
          <p
            aria-hidden
            className={css({
              fontFamily: 'ich1q',
            })}
          >
            みつかりませんでした
          </p>
        </hgroup>
        <p>お探しのページは見つかりませんでした。</p>
        <p>ページが移動したか、URLが間違っている可能性があります。</p>
        <LinkButton
          className={css({
            columnGap: '0.5rem',
          })}
          href="/"
          icon={<Undo2 size="20" />}
          variant="normal"
        >
          TOPにもどる
        </LinkButton>
      </div>
    </SiteContentLayout>
  );
}
