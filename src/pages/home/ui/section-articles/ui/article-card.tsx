import Link from 'next/link';

type Props = {
    title: string;
    category: string;
    publishedAt: Date;
    href: string;
};

export const ArticleCard = ({ title, category, publishedAt, href }: Props) => {
    return (
        <article className="group relative flex items-center justify-between gap-x-4 rounded-lg border border-neutral-200 px-4 py-3 duration-300 hover:bg-neutral-100 dark:border-neutral-200/20 dark:hover:bg-neutral-100/5">
            <div className="flex flex-col">
                <div className="mb-1 flex flex-col">
                    <h4 className="font-medium text-neutral-900 dark:text-white">
                        <Link href={href} className="after:absolute after:inset-0">
                            {title}
                        </Link>
                    </h4>
                </div>
                <div className="flex items-center gap-x-1">
                    <time className="inline-block text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {publishedAt.toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })}
                    </time>
                    <span className="inline-block text-sm leading-none font-light text-neutral-500 dark:text-neutral-400">
                        •
                    </span>
                    <span className="inline-block text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {category}
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <span className="inline-flex items-center justify-center text-neutral-900 dark:text-white">
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
                        className="size-5"
                    >
                        <path
                            d="M5 12h14"
                            className="translate-x-3 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
                        />
                        <path
                            d="m12 5 7 7-7 7"
                            className="-translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0"
                        />
                    </svg>
                </span>
            </div>
        </article>
    );
};
