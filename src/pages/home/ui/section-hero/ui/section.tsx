import { differenceInYears } from 'date-fns';
import { pluralize } from '@/shared/lib/pluralize';

export function SectionHero() {
    const birthDate = new Date('2001-03-15T10:03:00.000Z');
    const today = new Date();

    const years = differenceInYears(today, birthDate);
    const age = `${years} ${pluralize(years, ['год', 'года', 'лет'])}`;

    return (
        <section>
            <div className="pt-10 pb-5 lg:pt-16 lg:pb-8">
                <div className="container max-w-screen-md">
                    <div className="flex flex-col">
                        <h1 className="mb-5 text-xl lg:text-2xl font-medium text-neutral-900 dark:text-white">
                            Привет! Меня зовут Ден Ковалев <span>👋🏻</span>
                        </h1>
                        <p>
                            Мне {age}. Я – веб-разработчик. Изучаю японский, путешествую и исследую искусственные
                            интеллекты.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}