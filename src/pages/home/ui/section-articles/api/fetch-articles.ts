import fs from 'node:fs/promises';
import { join, parse } from 'node:path';
import { cwd } from 'node:process';

import matter from 'gray-matter';

import { Article } from '@/pages/articles-list/model/types';

export async function fetchArticles(limit: number = 3) {
    const entries = await fs.readdir(join(cwd(), 'content', 'articles'), {
        recursive: true,
        withFileTypes: true,
    });

    const mdFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.md'));

    const articles = await Promise.all(
        mdFiles.map(async (file) => {
            const category = file.parentPath.split('/').at(-1) as string;

            const content = await fs.readFile(join(cwd(), 'content', 'articles', category, file.name), 'utf-8');
            const { data } = matter(content);

            const { title, published_at, draft } = data;

            if (draft) {
                return null;
            }

            const slug = parse(file.name).name;

            const article: Article = {
                title,
                slug,
                category,
                publishedAt: published_at,
            };

            return article;
        })
    );

    const onlyArticles = articles.filter((article) => article !== null);
    const sortedArticles = onlyArticles.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

    return sortedArticles.slice(0, limit);
}
