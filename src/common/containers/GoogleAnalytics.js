import { compose, lifecycle, renderNothing } from 'recompose';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import { withWeb3 } from '../../lib/web3';

const componentDidMount = function() {
    const { pathname } = this.props.location;
    const account = this.props.web3.account;

    ReactGA.initialize('UA-9573461-9', { gaOptions: { user_id: account } });
    ReactGA.pageview(pathname);
};

export default compose(
    withWeb3,
    withRouter,
    lifecycle({ componentDidMount }),
)(renderNothing);
