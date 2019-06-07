import get from 'lodash/get';

export const theme = {
    colors: {
        primary: '#313A87',
        darkBlue: '#1C213F',
        grey: '#525f7f',
        skin: '#F8E9E9',
        white: '#fff',
        red: '#F5534F',
        black: '#000000',
    },
    fonts: {
        pageHeading: '800 54px bitter, sans-serif;',
        smallPageHeading: '800 30px bitter,sans-serif;',
        subtitle: '500 22px bitter,sans-serif;',
        title: '600 22px bitter,sans-serif;',
        text: '400 20px sans-serif;',
        smallText: '400 16px sans-serif;',
        microText: '400 14px bitter,sans-serif;',
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
