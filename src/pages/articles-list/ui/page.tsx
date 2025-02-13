import { fetchArticles } from '@/pages/articles-list/api/fetch-articles';
import { ArticleCard } from '@/pages/articles-list/ui/article-card';

export async function ArticlesListPage() {
    const articles = await fetchArticles();

    return (
        <section>
            <div className="py-10 lg:py-16">
                <div className="container max-w-screen-md">
                    <div className="flex flex-col">
                        <h1 className="mb-5 text-2xl font-medium text-neutral-900 dark:text-white">Блог</h1>
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
