import I18n from 'react-native-i18n'

I18n.fallbacks = true;

I18n.translations = {
    'en': require('./en'),
    'fr': require('./fr'),
    'br': require('./br')
}

export default I18n;