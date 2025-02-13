import { useEffect, useState } from 'react';

import { capitalize } from '@/shared/lib/capitalize';

export function useClock() {
    const [isClockVisible, setIsClockVisible] = useState<boolean>(false);
    const [dateString, setDateString] = useState<string>(
        capitalize(
            new Date().toLocaleDateString('ru-RU', {
                weekday: 'short',
                month: 'short',
                day: '2-digit',
            })
        )
    );
    const [hoursString, setHoursString] = useState<string>('00');
    const [minutesString, setMinutesString] = useState<string>('00');

    function updateClock() {
        const date = new Date();

        const dateStr = date.toLocaleDateString('ru-RU', {
            weekday: 'short',
            month: 'short',
            day: '2-digit',
        });

        setDateString(capitalize(dateStr));
        setHoursString(date.toLocaleTimeString('ru-RU', { hour: '2-digit' }).padStart(2, '0'));
        setMinutesString(date.toLocaleTimeString('ru-RU', { minute: '2-digit' }).padStart(2, '0'));
    }

    useEffect(() => {
        updateClock();
        setIsClockVisible(true);

        const timer = setInterval(() => {
            updateClock();
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return { isClockVisible, dateString, hoursString, minutesString };
}
