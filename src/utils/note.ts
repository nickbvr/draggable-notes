import { KeyboardEvent } from 'react';
import randomColor from 'randomcolor';
import KEY_CODES from '../constants';

export const getNote = (text: string) => {
    return {
        id: Date.now(),
        text,
        color: randomColor({
            luminosity: 'light',
        }),
        position: {
            x: Math.floor(Math.random() * (window.innerWidth - 100)),
            y: Math.floor(Math.random() * (window.innerHeight - 100)),
        },
    };
};

export const onKeyEnter = (
    handler: (id?: number) => void,
    e: KeyboardEvent<HTMLInputElement>,
    id?: number,
) => {
    e.key === KEY_CODES.enter && handler(id);
};
