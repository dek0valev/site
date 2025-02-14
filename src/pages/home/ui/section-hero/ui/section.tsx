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
                        <h1 className="mb-5 text-xl font-medium text-neutral-900 lg:text-2xl dark:text-white">
                            Привет! Меня зовут Ден Ковалев <span>👋🏻</span>
                        </h1>
                        <p>
                            Мне {age} и я обожаю мир технологий. Работаю веб-разработчиком, интересуюсь data-инженерией
                            и исследую искусственные интеллекты. Люблю экспериментировать с кодом, искать оригинальные
                            подходы и непрерывно развиваться в сфере IT.
                        </p>
                        <br />
                        <p>
                            Помимо этого, я изучаю японский и путешествую. Это помогает расширить кругозор и вдохновляет
                            на нестандартные решения. Новые впечатления и опыт, полученные в дороге, способствуют
                            появлению свежих идей для проектов и развитию навыков.
                        </p>
                        <br />
                        <p>
                            Моя отдельная страсть — механические клавиатуры. Я ценю их за комфорт и бесконечные
                            возможности кастомизации, которые превращают привычный рабочий процесс в увлекательное
                            творчество.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
