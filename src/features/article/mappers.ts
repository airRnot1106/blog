import { formatDateToYYYYMMDD } from '../../utils/date';
import type { BlogArticle } from '../blog-article/schemas';
import type { QiitaArticle } from '../qiita-article/schemas';
import type { ZennArticle } from '../zenn-article/schemas';
import type { Article } from './schemas';

export const mapBlogArticle = (dto: BlogArticle): Article => ({
  id: `blog-${dto.slug}`,
  title: dto.title,
  url: `/articles/${dto.slug}`,
  createdAt: formatDateToYYYYMMDD(dto.createdAt),
});

export const mapQiitaArticle = (dto: QiitaArticle): Article => ({
  id: `qiita-${dto.id}`,
  title: dto.title,
  url: dto.url,
  createdAt: dto.created_at,
});

export const mapZennArticle = (dto: ZennArticle): Article => ({
  id: `zenn-${dto.id}`,
  title: dto.title,
  url: `https://zenn.dev${dto.path}`,
  createdAt: dto.published_at,
});
