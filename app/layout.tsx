import '@/app/styles/main.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { interFont, jetBrainsMonoFont } from '@/app/fonts';

export const metadata: Metadata = {
    title: {
        default: 'KOVALEV',
        template: '%s | KOVALEV',
    },
    description: 'Сайт веб-разработчика и путешественника Дена Ковалева',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ru" className={`${interFont.variable} ${jetBrainsMonoFont.variable} antialiased`}>
            <body className="min-h-dvh max-w-screen bg-white text-neutral-600 dark:bg-stone-900 dark:text-neutral-300">
                <div className="isolate">
                    <main id="content">{children}</main>
                </div>
            </body>
        </html>
    );
}
