import { join } from 'node:path';

import type { Metadata } from 'next';

import { BASE_URL } from '@/shared/config';
import { fetchArticle } from '@/pages/articles-read/api/fetch-article';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    const article = await fetchArticle(slug);

    const title = article?.title ?? 'Статья в блоге';
    const description = article?.description ?? 'Описание статьи в блоге';
    const url = join('blog', slug);

    return {
        title,
        description,
        metadataBase: new URL(BASE_URL),
        openGraph: {
            title,
            description,
            url,
            type: 'website',
            images: [
                {
                    url: '/images/og_card.webp',
                    alt: 'KOVALEV',
                    width: 1200,
                    height: 630,
                },
            ],
        },
    };
}
