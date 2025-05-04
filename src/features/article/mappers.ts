import type { QiitaArticle } from '../qiita-article/schemas';
import type { ZennArticle } from '../zenn-article/schemas';
import type { Article } from './schemas';

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
