import get from 'lodash/get';

export const theme = {
    colors: {
        primary: '#4059A7',
        dark: '#403C39',
        font: '#403C39',
        grey: '#9B9B9B',
        greyLight: '#F3F4F5',
        white: '#fff',
        red: '#C03D3D',
    },
    fonts: {
        pageHeading: '900 48px Helvetica, Segoe, sans-serif;',
        listingTitle: '500 20px Helvetica, Segoe, sans-serif;',
        code: 'normal 1rem Source Code Pro, sans-serif',
        text: '400 1rem Source Sans Pro, sans-serif',
        controlText: '400 0.8125rem Source Sans Pro, sans-serif',
        profileMenu: '400 1.125rem Roboto, sans-serif',
    },
    form: {
        helperTextHeight: '16px',
        fieldBox: {
            height: '42px',
            minWidth: '250px',
        },
    },
    easing: {
        in: 'cubic-bezier(.51,-0.21,.39,1.46)',
        out: 'cubic-bezier(.68,-0.5,.56,1.23)',
    },
    headerHeight: '74px',
    layoutWidth: '90%',
    footerHeight: '230px',
};

export function themeVar(path) {
    return () => get(theme, path);
}

export function font(fontKey) {
    return themeVar(`fonts.${fontKey}`);
}

export function color(colorKey) {
    return themeVar(`colors.${colorKey}`);
}

export function fieldBox(key) {
    return themeVar(`form.fieldBox.${key}`);
}

export function easing(key) {
    return themeVar(`easing.${key}`);
}
