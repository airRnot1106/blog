'use client';

import { Moon, Sun } from 'lucide-react';
import type { FC } from 'react';
import { css, cva, cx } from '../../../../../../styled-system/css';
import {
  Button,
  type ButtonProps,
} from '../../../../../components/atoms/button';
import { useSiteTheme } from '../../../hooks';

export type SiteThemeToggleButtonProps = Omit<
  ButtonProps<'ghost'>,
  'variant' | 'children'
>;

const iconRecipe = cva({
  base: {
    transition: 'transform 0.4s ease, opacity 0.4s ease',
    opacity: 0,
    "&[data-enabled='true']": {
      opacity: 1,
      transform: 'rotate(0deg) scale(1)',
    },
  },
  variants: {
    theme: {
      light: {
        transform: 'rotate(-45deg) scale(0.8)',
      },
      dark: {
        transform: 'rotate(45deg) scale(0.8)',
      },
      system: {
        transform: 'rotate(-45deg) scale(1)',
      },
    },
    size: {
      'fit-content': {
        scale: '1.0',
      },
      xs: {
        scale: '0.8',
      },
      sm: {
        scale: '1.0',
      },
      md: {
        scale: '1.2',
      },
      lg: {
        scale: '1.4',
      },
      xl: {
        scale: '1.6',
      },
    },
  },
});

export const SiteThemeToggleButton: FC<SiteThemeToggleButtonProps> = ({
  size = 'md',
  className,
  ...rest
}) => {
  const { siteTheme, setSiteTheme } = useSiteTheme();

  const handleClick = () => {
    switch (siteTheme) {
      case 'light': {
        setSiteTheme('dark');
        break;
      }
      case 'dark': {
        setSiteTheme('light');
        break;
      }
      case 'system': {
        setSiteTheme('light');
        break;
      }
    }
  };

  return (
    <Button
      aria-checked={siteTheme === 'dark'}
      aria-label="ダークモード"
      className={cx(
        className,
        css({
          display: 'inline-grid',
          placeContent: 'center',
          '& > *': {
            gridRow: 1,
            gridColumn: 1,
          },
        }),
      )}
      onClick={handleClick}
      role="switch"
      size={size}
      type="button"
      variant="ghost"
      {...rest}
    >
      <Sun
        className={iconRecipe({ theme: siteTheme, size })}
        data-enabled={siteTheme === 'light' || siteTheme === 'system'}
        focusable="false"
      />
      <Moon
        className={iconRecipe({ theme: siteTheme, size })}
        data-enabled={siteTheme === 'dark'}
        focusable="false"
      />
    </Button>
  );
};
