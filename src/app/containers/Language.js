import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { defineMessages, injectIntl } from 'react-intl';
import { map, find } from 'lodash';

import Language from '../components/Language';
import { setLocale } from '../../actions/user';

const options = [
    {
        value: 'en',
        text: 'English',
        flag: 'us',
    },
    {
        value: 'ru',
        text: 'Русский',
        flag: 'ru',
    },
    {
        value: 'tr',
        text: 'Türk',
        flag: 'tr',
    },
    {
        value: 'zh',
        text: '中文',
        flag: 'cn',
    },
];

const props = withProps(({ locale, intl }) => {
    const currentOption = find(options, { value: locale });

    return { active: currentOption, options };
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
