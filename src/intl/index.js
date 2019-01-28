import { addLocaleData } from 'react-intl';

// Import locales
import enLocal from 'react-intl/locale-data/en';
import ruLocale from 'react-intl/locale-data/ru';
import trLocale from 'react-intl/locale-data/tr';
import zhLocale from 'react-intl/locale-data/zh';

// Import messages
import en from './en.json';
import ru from './ru.json';
import tr from './tr.json';
import zh from './cn.json';

addLocaleData([...enLocal, ...ruLocale, ...trLocale, ...zhLocale]);

const messages = { en, ru, tr, zh };

export { messages };
