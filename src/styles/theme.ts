import { lightColors, darkColors, Colors } from './colors';
import { lightShadows, darkShadows, Shadows } from './shadows';

export interface Theme {
    colors: Colors;
    shadows: Shadows;
}

export const lightTheme: Theme = {
    colors: lightColors,
    shadows: lightShadows,
};

export const darkTheme: Theme = {
    colors: darkColors,
    shadows: darkShadows,
};
