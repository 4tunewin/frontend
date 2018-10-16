/**
 * Localization provider that provides correct messages
 * based on current selected language.
 */

import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider as Provider } from 'react-intl';

import { messages } from '../intl';

const IntlProvider = ({ locale, messages, ...props }) => (
    <Provider locale={locale} messages={messages} {...props} />
);

const mapStateToProps = ({ user }) => ({
    locale: user.get('locale'),
    messages: messages[user.get('locale')],
});

export default connect(mapStateToProps)(IntlProvider);
