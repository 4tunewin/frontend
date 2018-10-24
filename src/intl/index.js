import { addLocaleData } from 'react-intl';

// Import locales
import enLocal from 'react-intl/locale-data/en';
import ruLocale from 'react-intl/locale-data/ru';

// Import messages
import en from './en.json';
import ru from './ru.json';

addLocaleData([...enLocal, ...ruLocale]);

const messages = { en, ru };

export { messages };
