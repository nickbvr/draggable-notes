import { lightColors, darkColors } from './colors';

export interface Shadows {
    big: string;
    swappedBig: string;
    reverseBig: string;
    small: string;
    transparentSmall: string;
    transparentInsetSmall: string;
    swappedTransparentInsetSmall: string;
}

export const lightShadows: Shadows = {
    big: `6px 6px 9px ${lightColors.body90}, -6px -6px 9px ${lightColors.body80}`,
    swappedBig: `6px 6px 9px ${lightColors.body80}, -6px -6px 9px ${lightColors.body90}`,
    reverseBig: `-6px -6px 9px ${lightColors.body90}, 6px 6px 9px ${lightColors.body80}`,
    small: `4px 4px 6px ${lightColors.body90}, -4px -4px 6px ${lightColors.body80}`,
    transparentSmall: `0 0 transparent, 0 0 transparent, 4px 4px 6px ${lightColors.body90}, -4px -4px 6px ${lightColors.body80}`,
    transparentInsetSmall: `0 0 transparent, 0 0 transparent, inset 4px 4px 6px ${lightColors.body90}, inset -4px -4px 6px ${lightColors.body80}`,
    swappedTransparentInsetSmall: `0 0 transparent, 0 0 transparent, inset 4px 4px 6px ${lightColors.body80}, inset -4px -4px 6px ${lightColors.body90}`,
};

export const darkShadows: Shadows = {
    big: `6px 6px 9px ${darkColors.body90}, -6px -6px 9px ${darkColors.body80}`,
    swappedBig: `6px 6px 9px ${darkColors.body80}, -6px -6px 9px ${darkColors.body90}`,
    reverseBig: `-6px -6px 9px ${darkColors.body90}, 6px 6px 9px ${darkColors.body80}`,
    small: `4px 4px 6px ${darkColors.body90}, -4px -4px 6px ${darkColors.body80}`,
    transparentSmall: `0 0 transparent, 0 0 transparent, 4px 4px 6px ${darkColors.body90}, -4px -4px 6px ${darkColors.body80}`,
    transparentInsetSmall: `0 0 transparent, 0 0 transparent, inset 4px 4px 6px ${darkColors.body90}, inset -4px -4px 6px ${darkColors.body80}`,
    swappedTransparentInsetSmall: `0 0 transparent, 0 0 transparent, inset 4px 4px 6px ${darkColors.body80}, inset -4px -4px 6px ${darkColors.body90}`,
};
