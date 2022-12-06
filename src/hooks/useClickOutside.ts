import { useEffect, MutableRefObject } from 'react';

export const useClickOutside = (
    ref: MutableRefObject<{ [key: string]: HTMLDivElement | null }>,
    key: number | undefined,
    handler: () => void,
) => {
    const onClickOutside = (e: Event) => {
        key &&
            ref.current &&
            !e.composedPath().includes(ref.current[key] as EventTarget) &&
            handler();
    };

    useEffect(() => {
        document.body.addEventListener('mousedown', onClickOutside);

        return () => document.body.removeEventListener('mousedown', onClickOutside);
    });
};
