import type { BlogArticle } from '../blog-article/schemas';
import type { QiitaArticle } from '../qiita-article/schemas';
import type { ZennArticle } from '../zenn-article/schemas';
import type { Article } from './schemas';

export const mapBlogArticle = (dto: BlogArticle): Article => ({
  id: `blog-${dto.slug}`,
  title: dto.title,
  href: `/articles/${dto.slug}`,
  createdAt: dto.createdAt,
  isExternalSite: false,
  src: dto.thumbnail,
});

export const mapQiitaArticle = (dto: QiitaArticle): Article => ({
  id: `qiita-${dto.id}`,
  title: dto.title,
  href: dto.url,
  createdAt: new Date(dto.created_at),
  isExternalSite: true,
  src: '',
});

export const mapZennArticle = (dto: ZennArticle): Article => ({
  id: `zenn-${dto.id}`,
  title: dto.title,
  href: `https://zenn.dev${dto.path}`,
  createdAt: new Date(dto.published_at),
  isExternalSite: true,
  src: '',
});
