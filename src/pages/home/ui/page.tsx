import { Fragment } from 'react';

import { SectionHero } from '@/pages/home/ui/section-hero';
import { SectionArticles } from '@/pages/home/ui/section-articles';
import { SectionContacts } from '@/pages/home/ui/section-contacts/ui/section';

export function HomePage() {
    return (
        <Fragment>
            <SectionHero />
            <SectionArticles />
            <SectionContacts />
        </Fragment>
    );
}
