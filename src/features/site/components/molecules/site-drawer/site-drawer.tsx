'use client';

import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { type FC, useEffect, useRef, useState } from 'react';
import { type DialogProps, Drawer } from 'vaul';
import { css } from '../../../../../../styled-system/css';
import { Button } from '../../../../../components/atoms/button';
import { SiteUtilityList } from '../../../../site-utility/components/molecules/site-utility-list';
import { SITE_NAVIGATION_LINKS } from '../../../consts';
import { SiteNavigationLinkList } from '../site-navigation-link-list';

export type SiteDrawerProps = DialogProps;

export const SiteDrawer: FC<SiteDrawerProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPath.current) {
      setIsOpen(false);
      prevPath.current = pathname;
    }
  }, [pathname]);

  return (
    <Drawer.Root
      autoFocus
      direction="right"
      onOpenChange={setIsOpen}
      open={isOpen}
      {...props}
    >
      <Drawer.Trigger asChild>
        <Button
          className={css({
            paddingBlock: '0.5rem',
            paddingInline: '0.5rem',
          })}
          size="fit-content"
          variant="normal"
        >
          <Menu aria-label="メニューを開く" />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay
          className={css({
            position: 'fixed',
            inset: 0,
            bg: 'muted/60',
          })}
        />
        <Drawer.Content
          className={css({
            display: 'grid',
            gridAutoFlow: 'row',
            position: 'fixed',
            top: '0.5rem',
            right: '0.5rem',
            bottom: '0.5rem',
            zIndex: 10,
            outline: 'none',
            width: '20rem',
          })}
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={
            { '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties
          }
        >
          <div
            className={css({
              color: 'text',
              backgroundColor: 'base',
              borderRadius: 'md',
              paddingBlock: '1.25rem',
            })}
          >
            <div
              className={css({
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: -'1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                borderWidth: '0',
              })}
            >
              <Drawer.Title>メニュー</Drawer.Title>
              <Drawer.Description />
            </div>
            <nav
              className={css({
                borderBottom: '1px solid',
                borderBottomColor: 'muted/20',
                paddingBottom: '1.25rem',
              })}
            >
              <SiteNavigationLinkList
                links={SITE_NAVIGATION_LINKS}
                variant="anchor"
              />
            </nav>
            <SiteUtilityList
              className={css({
                justifySelf: 'center',
                paddingTop: '1.25rem',
              })}
            />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
