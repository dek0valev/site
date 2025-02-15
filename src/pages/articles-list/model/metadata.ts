import type { Metadata } from 'next';

import { BASE_URL } from '@/shared/config';

export const metadata: Metadata = {
    title: 'Блог',
    description: 'Блог веб-разработчика и путешественника Дена Ковалева',
    metadataBase: new URL(BASE_URL),
    openGraph: {
        title: 'Блог',
        description: 'Блог веб-разработчика и путешественника Дена Ковалева',
        url: '/blog',
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
