import { join } from 'node:path';

import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/shared/config';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: join(BASE_URL, 'sitemap.xml'),
    };
}
