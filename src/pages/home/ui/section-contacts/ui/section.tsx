export function SectionContacts() {
    const socials = [
        {
            name: 'Telegram канал',
            username: '@k0valevc',
            url: 'https://t.me/k0valevc',
        },
        {
            name: 'GitHub',
            username: 'dek0valev',
            url: 'https://github.com/dek0valev',
        },
    ];

    const contacts = [
        {
            name: 'Telegram',
            username: '@dek0valev',
            url: 'https://t.me/dek0valev',
        },
        {
            name: 'Email',
            username: 'de@k0valev.com',
            url: 'mailto:de@k0valev.com',
        },
    ];

    return (
        <section>
            <div className="pt-5 pb-10 lg:pt-8 lg:pb-16">
                <div className="container max-w-screen-md">
                    <div className="flex flex-col">
                        <div className="mb-5 flex items-center justify-between">
                            <h2 className="text-lg lg:text-xl font-medium text-neutral-900 dark:text-white">Контакты</h2>
                        </div>
                        <div className="flex flex-col">
                            <ul className="flex flex-col space-y-2">
                                {socials.map(({ name, username, url }) => (
                                    <li key={name} className="inline-block">
                                        <span>{name}: </span>
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="text-blue-700 underline underline-offset-2 hover:no-underline dark:text-blue-500"
                                        >
                                            {username}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <hr className="my-5 border-neutral-600" />
                            <ul className="flex flex-col space-y-2">
                                {contacts.map(({ name, username, url }) => (
                                    <li key={name} className="inline-block">
                                        <span>{name}: </span>
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="text-blue-700 underline underline-offset-2 hover:no-underline dark:text-blue-500"
                                        >
                                            {username}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
