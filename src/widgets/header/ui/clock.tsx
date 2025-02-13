'use client';

import { twMerge } from 'tailwind-merge';

import { useClock } from '@/widgets/header/model/use-clock';

export const Clock = () => {
    const { isClockVisible, dateString, hoursString, minutesString } = useClock();

    return (
        <div
            className={twMerge(
                `inline-flex items-center gap-x-2 text-sm text-neutral-900 opacity-0 duration-300 lg:text-base dark:text-white`,
                isClockVisible && `opacity-100`
            )}
        >
            <span className="inline-block">{dateString}</span>
            <span className="inline-flex">
                <span className="inline-block">{hoursString}</span>
                <span className="animate-blink inline-block">:</span>
                <span className="inline-block">{minutesString}</span>
            </span>
        </div>
    );
};
