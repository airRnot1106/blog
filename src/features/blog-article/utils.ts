import fs from 'node:fs/promises';
import matter from 'gray-matter';
import { err, ok } from '../../utils/result';
import { ARTICLE_PATH } from './consts';
import { type BlogArticle, blogArticleSchema } from './schemas';

export const getBlogArticles = async () => {
  const files = await fs.readdir(ARTICLE_PATH);

  const articles = await Promise.all(
    files
      .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace(/\.mdx?$/, '');

        const { data, content } = await fs
          .readFile(`${ARTICLE_PATH}/${file}`, 'utf-8')
          .then((data) => matter(data));

        return {
          file,
          slug,
          content,
          ...data,
        };
      }),
  );

  const result = blogArticleSchema.array().safeParse(articles);

  if (!result.success) {
    return err(result.error);
  }

  return ok(result.data);
};

export const getBlogArticleBySlug = async (slug: BlogArticle['slug']) => {
  const result = await getBlogArticles();

  if (!result.ok) {
    return err(result.error);
  }

  const article = result.data.find((article) => article.slug === slug);

  if (!article) {
    return err(new Error('Article not found'));
  }

  return ok(article);
};
