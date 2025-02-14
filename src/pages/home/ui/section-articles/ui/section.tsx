import Link from 'next/link';
import { ArticleCard } from '@/pages/articles-list/ui/article-card';
import { fetchArticles } from '@/pages/home/ui/section-articles/api/fetch-articles';

export async function SectionArticles() {
    const articles = await fetchArticles();

    return (
        <section>
            <div className="py-5 lg:py-8">
                <div className="container max-w-screen-md">
                    <div className="flex flex-col">
                        <div className="mb-5 flex items-center justify-between">
                            <h2 className="text-lg font-medium text-neutral-900 lg:text-xl dark:text-white">
                                Последние статьи
                            </h2>

                            <Link
                                href="/blog"
                                className="inline-block text-sm underline decoration-neutral-600/50 underline-offset-2 duration-300 hover:text-neutral-900 hover:decoration-neutral-900/50 lg:text-base dark:decoration-neutral-300/50 dark:hover:text-white dark:hover:decoration-white/50"
                            >
                                Смотреть все
                            </Link>
                        </div>
                        <div className="grid auto-rows-auto grid-cols-1 gap-y-3">
                            {articles.map(({ title, slug, category, publishedAt }) => {
                                return (
                                    <div key={slug} className="inline-flex flex-col">
                                        <ArticleCard
                                            category={category}
                                            title={title}
                                            publishedAt={publishedAt}
                                            href={`/blog/${slug}`}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
