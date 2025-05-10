import type { MDXComponents } from 'mdx/types';
import { cx } from '../styled-system/css';
import { Heading } from './components/atoms/heading';
import { Link } from './components/atoms/link';
import { Pre } from './components/molecules/pre';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, ...rest }) => (
      <Link variant="underline" {...rest}>
        {children}
      </Link>
    ),
    p: ({ className, children, ...rest }) => (
      <p className={cx(className, 'mdc-p')} {...rest}>
        {children}
      </p>
    ),
    hr: ({ className, ...rest }) => (
      <hr className={cx(className, 'mdc-hr')} {...rest} />
    ),
    h1: ({ children, ...rest }) => {
      const [title, subtitle] = children.split(' - ');
      return (
        <Heading
          as="h1"
          href={`#${title}`}
          subtitle={subtitle}
          title={title}
          variant="anchor"
          {...rest}
        />
      );
    },
    h2: ({ children, ...rest }) => {
      const [title, subtitle] = children.split(' - ');
      return (
        <Heading
          as="h2"
          href={`#${title}`}
          subtitle={subtitle}
          title={title}
          variant="anchor"
          {...rest}
        />
      );
    },
    h3: ({ children, ...rest }) => {
      const [title, subtitle] = children.split(' - ');
      return (
        <Heading
          as="h3"
          href={`#${title}`}
          subtitle={subtitle}
          title={title}
          variant="anchor"
          {...rest}
        />
      );
    },
    h4: ({ children, ...rest }) => {
      const [title, subtitle] = children.split(' - ');
      return (
        <Heading
          as="h4"
          href={`#${title}`}
          subtitle={subtitle}
          title={title}
          variant="anchor"
          {...rest}
        />
      );
    },
    h5: ({ children, ...rest }) => {
      const [title, subtitle] = children.split(' - ');
      return (
        <Heading
          as="h5"
          href={`#${title}`}
          subtitle={subtitle}
          title={title}
          variant="anchor"
          {...rest}
        />
      );
    },
    h6: ({ children, ...rest }) => {
      const [title, subtitle] = children.split(' - ');
      return (
        <Heading
          as="h6"
          href={`#${title}`}
          subtitle={subtitle}
          title={title}
          variant="anchor"
          {...rest}
        />
      );
    },
    pre: (props) => <Pre {...props} />,
    ...components,
  };
}
