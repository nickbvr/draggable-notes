import { v4 } from 'uuid';
import randomColor from 'randomcolor';

export const setNewItem = (value) => {
    const newItem = {
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
    return newItem;
};
