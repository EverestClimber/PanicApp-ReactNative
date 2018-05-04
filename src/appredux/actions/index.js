import { CHANGE_LANGUAGE } from 'appredux/constant';

export function changeLanguage(lang) {
    return {
        type: 'CHANGE_LANGUAGE',
        lang,
    };
}