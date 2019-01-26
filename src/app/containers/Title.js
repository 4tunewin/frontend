/**
 * Set correct title based on selected language
 */

import { compose, lifecycle, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';

const intlMessages = defineMessages({
    title: {
        id: 'app.App.title',
        defaultMessage: '4tune.win - fair blockchain based gambling games',
    },
});

const withTitle = lifecycle({
    componentWillReceiveProps({ locale, intl }) {
        if (this.props.locale !== locale) {
            document.title = intl.formatMessage(intlMessages.title);
        }
    },
});

export default compose(
    injectIntl,
    connect(({ user }) => ({ locale: user.get('locale') })),
    withTitle,
)(renderNothing);
