import Link from 'next/link';
import { redirect } from 'next/navigation';

import { fetchArticle } from '@/pages/articles-read/api/fetch-article';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function ArticlesReadPage({ params }: Props) {
    const { slug } = await params;

    const article = await fetchArticle(slug);

    if (!article) {
        redirect('/blog');
    }

    return (
        <section>
            <div className="py-10 lg:py-16">
                <div className="container max-w-screen-md">
                    <div className="flex flex-col">
                        <div className="mb-6 flex flex-col items-start">
                            <Link
                                href="/blog"
                                className="group inline-flex items-center justify-center gap-x-1 rounded-md border border-neutral-200 px-2 py-1.5 text-sm duration-300 hover:bg-neutral-100 dark:border-neutral-200/20 dark:text-white dark:hover:bg-neutral-100/5"
                            >
                                <span className="inline-flex items-center justify-center dark:text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="size-4"
                                    >
                                        <path
                                            d="m12 19-7-7 7-7"
                                            className="translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
                                        />
                                        <path
                                            d="M19 12H5"
                                            className="translate-x-2 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
                                        />
                                    </svg>
                                </span>
                                <span className="inline-block"> Назад в блог </span>
                            </Link>
                        </div>
                        <div className="mb-10 flex flex-col">
                            <h1 className="mb-2 text-2xl font-medium text-neutral-900 dark:text-white">
                                {article.title}
                            </h1>
                            <div className="flex items-center gap-x-1">
                                <time className="inline-block font-medium text-neutral-500 dark:text-neutral-400">
                                    {article.publishedAt.toLocaleDateString('ru-RU', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })}
                                </time>
                                <span className="inline-block leading-none font-light text-neutral-500 dark:text-neutral-400">
                                    •
                                </span>
                                <span className={`inline-block font-medium text-neutral-500 dark:text-neutral-400`}>
                                    {article.category}
                                </span>
                            </div>
                        </div>
                        <article
                            dangerouslySetInnerHTML={{ __html: article.content }}
                            className={`prose prose-neutral dark:prose-invert prose-headings:font-medium prose-h2:text-xl prose-h3:text-lg max-w-full`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
