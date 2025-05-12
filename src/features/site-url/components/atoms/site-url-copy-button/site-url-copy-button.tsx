'use client';

import { Link } from 'lucide-react';
import type { FC } from 'react';
import { css, cx } from '../../../../../../styled-system/css';
import { Button } from '../../../../../components/atoms/button';

export type SiteUrlCopyButtonProps = {
  url: string;
  size?: number | `${number}`;
  className?: string | undefined;
};

export const SiteUrlCopyButton: FC<SiteUrlCopyButtonProps> = ({
  url,
  size = 24,
  className,
  ...rest
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert('URLをクリップボードにコピーしました');
  };

  return (
    <Button
      aria-label="URLをクリップボードにコピーする"
      className={cx(
        className,
        css({
          paddingBlock: '0.5rem',
          paddingInline: '0.5rem',
        }),
      )}
      onClick={handleCopy}
      size="fit-content"
      variant="ghost"
      {...rest}
    >
      <Link size={size} />
    </Button>
  );
};
