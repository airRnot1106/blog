import type { FC } from 'react';
import type { AudioProps } from '../../../../../components/atoms/audio';
import { Audio } from '../../../../../components/atoms/audio';
import { R2_MEDIA_BASE_URL } from '../../../../../libs/media';
import type { BlogArticle } from '../../../../blog-article/schemas';

export type BlogArticlePodcastAudioProps = Omit<
  AudioProps<'primary'>,
  'children' | 'src' | 'variant'
> & {
  slug: BlogArticle['slug'];
};

export const BlogArticlePodcastAudio: FC<BlogArticlePodcastAudioProps> = ({
  slug,
  ...rest
}) => {
  const src = `${R2_MEDIA_BASE_URL}/${slug}.mp3`;
  return (
    <Audio src={src} variant="primary" {...rest}>
      <track
        kind="captions"
        src={`${R2_MEDIA_BASE_URL}/${slug}.vtt`}
        srcLang="ja"
      />
    </Audio>
  );
};
