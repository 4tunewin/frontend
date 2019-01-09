/**
 * Re-export configuration based on current environment
 *
 * Environment can be specifiedn over NODE_ENV variable
 */
import development from './config.dev';
import production from './config.prod';
import staging from './config.stage';
import test from './config.jest';

const env = process.env.REACT_APP_ENV || process.env.NODE_ENV || 'development';

export default { development, production, staging, test }[env];
