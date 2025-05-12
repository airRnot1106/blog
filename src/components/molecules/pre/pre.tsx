'use client';

import { Check, Clipboard } from 'lucide-react';
import {
  type DetailedHTMLProps,
  type FC,
  type HTMLAttributes,
  useRef,
  useState,
} from 'react';
import { css } from '../../../../styled-system/css';
import { Button } from '../../atoms/button';

export type PreProps = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;

export const Pre: FC<PreProps> = ({ children, ...props }) => {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleClickCopy = async () => {
    const code = preRef.current?.textContent;

    if (code) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  };

  return (
    <pre
      ref={preRef}
      {...props}
      className={css({
        position: 'relative',
        '& > button': {
          opacity: 0,
          visibility: 'hidden',
          transition: 'opacity 0.1s ease-in-out, visibility 0.1s ease-in-out',
        },
        _hover: {
          '& > button': {
            opacity: 1,
            visibility: 'visible',
          },
        },
      })}
    >
      <Button
        aria-label={isCopied ? 'コピーしました' : 'コピーする'}
        className={css({
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
        })}
        disabled={isCopied}
        onClick={handleClickCopy}
        size="sm"
        type="button"
        variant="normal"
      >
        {isCopied ? <Check /> : <Clipboard />}
      </Button>
      {children}
    </pre>
  );
};
