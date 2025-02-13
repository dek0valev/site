import fs from 'node:fs/promises';
import { join, parse } from 'node:path';
import { cwd } from 'node:process';

import matter from 'gray-matter';

import { Article } from '@/pages/articles-read/model/types';
import { parseMarkdown } from '@/pages/articles-read/model/parse-markdown';

export async function fetchArticle(slug: string) {
    const entries = await fs.readdir(join(cwd(), 'content', 'articles'), {
        recursive: true,
        withFileTypes: true,
    });

    const mdFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.md'));

    const mdFile = mdFiles.find((file) => parse(file.name).name === slug);

    if (!mdFile) {
        return null;
    }

    const category = mdFile.parentPath.split('/').at(-1) as string;

    const mdFileContent = await fs.readFile(join(cwd(), 'content', 'articles', category, mdFile.name), 'utf-8');
    const { data, content: markdown } = matter(mdFileContent);

    const { title, description, published_at, modified_at, draft } = data;

    if (draft) {
        return null;
    }

    const { markdown: content } = await parseMarkdown(markdown);

    const article: Article = {
        title,
        category,
        description,
        publishedAt: published_at,
        modifiedAt: modified_at,
        content,
    };

    return article;
}
