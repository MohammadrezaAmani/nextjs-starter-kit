import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig from './i18nConfig';

i18n
    .use(initReactI18next)
    .use(resourcesToBackend((language, namespace) => import(`./public/locales/${language}/${namespace}.json`)))
    .init({
        supportedLngs: i18nConfig.locales,
        fallbackLng: i18nConfig.defaultLocale,
        ns: ['common'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
