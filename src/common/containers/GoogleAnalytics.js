import { compose, lifecycle, renderNothing } from 'recompose';
import { withRouter } from 'react-router-dom';

import { withWeb3 } from '../../lib/web3';

const componentDidMount = function() {
    const gtag = window.gtag;
    if (typeof gtag !== 'function') {
        return;
    }

    const { web3, location } = this.props;

    gtag('config', 'GA_TRACKING_ID', {
        page_location: window.location.href,
        page_path: location.pathname,
    });

    gtag('set', { user_id: web3.account });
};

const componentWillUpdate = function({ location }) {
    const gtag = window.gtag;
    if (typeof gtag !== 'function') {
        return;
    }

    if (location.pathname === this.props.location.pathname) {
        return;
    }

    gtag('config', 'GA_TRACKING_ID', {
        page_location: window.location.href,
        page_path: location.pathname,
    });
};

export default compose(
    withWeb3,
    withRouter,
    lifecycle({ componentDidMount, componentWillUpdate }),
)(renderNothing);
