import { addLocaleData } from 'react-intl';

// Import locales
import enLocal from 'react-intl/locale-data/en';
import ruLocale from 'react-intl/locale-data/ru';
import trLocale from 'react-intl/locale-data/tr';

// Import messages
import en from './en.json';
import ru from './ru.json';
import tr from './tr.json';

addLocaleData([...enLocal, ...ruLocale, ...trLocale]);

const messages = { en, ru, tr };

export { messages };
