import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { defineMessages, injectIntl } from 'react-intl';
import { map, find } from 'lodash';

import Language from '../components/Language';
import { setLocale } from '../../actions/user';

const intlMessages = defineMessages({
    en: {
        id: 'app.Language.en',
        defaultMessage: 'English',
    },
    ru: {
        id: 'app.Language.ru',
        defaultMessage: 'Russian',
    },
    tr: {
        id: 'app.Language.tr',
        defaultMessage: 'Turkish',
    },
});

const options = [
    {
        value: 'en',
        text: 'English',
        flag: 'us',
    },
    {
        value: 'ru',
        text: 'Russian',
        flag: 'ru',
    },
    {
        value: 'tr',
        text: 'Turkish',
        flag: 'tr',
    },
];

const props = withProps(({ locale, intl }) => {
    const currentOption = find(options, { value: locale });

    return {
        active: {
            ...currentOption,
            text: intl.formatMessage(intlMessages[currentOption.value]),
        },
        options: map(options, option => ({
            ...option,
            text: intl.formatMessage(intlMessages[option.value]),
        })),
    };
});

const mapStateToProps = ({ user }) => ({
    locale: user.get('locale'),
});

export default compose(
    connect(
        mapStateToProps,
        { onChange: setLocale },
    ),
    injectIntl,
    props,
)(Language);
