import { connect } from 'react-redux';

export default connect(({ user }) => ({
    mute: user.get('mute', false),
}));
