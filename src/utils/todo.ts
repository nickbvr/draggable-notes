import { KeyboardEvent } from 'react';
import { v4 } from 'uuid';
import randomColor from 'randomcolor';
import KEY_CODES from '../constants';

export const getToDo = (value: string) => {
    return {
        id: v4(),
        value: value.trim(),
        color: randomColor({
            luminosity: 'light',
        }),
        defaultPos: {
            x: Math.floor(Math.random() * (window.innerWidth - 100)),
            y: Math.floor(Math.random() * (window.innerHeight - 100)),
        },
    };
};

export const onKeyEnter = (
    callback: (id?: string) => void,
    e: KeyboardEvent<HTMLInputElement>,
    id?: string,
) => {
    e.key === KEY_CODES.enter && callback(id);
};
