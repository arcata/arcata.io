import get from 'lodash/get';

export const theme = {
    colors: {
        primary: '#313A87',
        darkBlue: '#1C213F',
        grey: '#525f7f',
        skin: '#F8E9E9',
        white: '#fff',
        red: '#F5534F',
    },
    fonts: {
        pageHeading: '800 46px calling-code, sans-serif;',
        smallPageHeading: '900 30px bitter, serif;',
        subtitle: '500 22px asap,sans-serif;',
        title: '600 22px asap,sans-serif;',
        text: '500 16px asap,sans-serif;',
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
