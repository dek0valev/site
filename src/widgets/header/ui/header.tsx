import Link from 'next/link';

import { Clock } from '@/widgets/header/ui/clock';
import Image from 'next/image';

export const Header = () => {
    const links = [
        {
            label: 'Блог',
            href: '/blog',
        },
        {
            label: 'Проекты',
            href: '/projects',
        },
    ];

    return (
        <header className="bg-neutral-100 dark:bg-stone-800">
            <div className="py-1">
                <div className="px-4">
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center justify-between gap-x-2 md:flex-initial md:justify-start">
                            <Link href="/" aria-label="Главная" className="inline-flex no-underline">
                                <Image
                                    src="/images/logo.png"
                                    alt="Лого"
                                    width={32}
                                    height={32}
                                    className="size-5 lg:size-6"
                                />
                            </Link>
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-x-4 md:justify-between">
                            <nav className="flex items-center">
                                <ul className="-mr-1.5 flex items-center md:mr-0">
                                    {links.map(({ label, href }) => (
                                        <li className="grid" key={label}>
                                            <Link
                                                href={href}
                                                className="inline-flex items-center justify-center rounded-md px-1.5 py-0.5 text-sm text-neutral-900 duration-150 hover:bg-neutral-200 lg:text-base dark:text-white dark:hover:bg-neutral-200/5"
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="hidden items-center md:flex">
                                <Clock />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
