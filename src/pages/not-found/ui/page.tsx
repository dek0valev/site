import Link from 'next/link';

export function NotFoundPage() {
    return (
        <section>
            <div className="py-10 lg:py-16">
                <div className="container max-w-screen-md">
                    <div className="flex flex-col items-center">
                        <h1 className="mb-2 text-center text-2xl font-medium text-neutral-900 lg:text-3xl dark:text-white">
                            404
                        </h1>
                        <p className="mb-6 text-center">Кажется, такой страницы не существует :(</p>
                        <Link
                            href="/"
                            className="group inline-flex items-center justify-center gap-x-1 rounded-md border border-neutral-200 px-2 py-1.5 text-sm text-neutral-900 duration-300 hover:bg-neutral-100 dark:border-neutral-200/20 dark:text-white dark:hover:bg-neutral-100/5"
                        >
                            <span className="inline-flex items-center justify-center">
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
                            <span className="inline-block">Вернуться на главную</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
