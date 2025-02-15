import { join, parse } from 'node:path';
import fs from 'node:fs/promises';
import { cwd } from 'node:process';

import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/shared/config';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = ['', '/blog', '/projects'].map((route) => ({
        url: join(BASE_URL, route),
        lastModified: new Date().toISOString(),
    }));

    const articlesSlugs = await fetchArticlesSlugs();

    const articles = articlesSlugs.map((slug) => ({
        url: join(BASE_URL, 'blog', slug),
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...articles];
}

async function fetchArticlesSlugs() {
    const entries = await fs.readdir(join(cwd(), 'content', 'articles'), {
        recursive: true,
        withFileTypes: true,
    });

    const mdFiles = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.md'));

    const slugs = mdFiles.map((file) => parse(file.name).name);

    return slugs.map((slug) => slug);
}
