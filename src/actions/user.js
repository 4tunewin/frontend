/**
 * Save provided web3 accounts
 *
 * @param {Array} accounts - List of available accounts
 */
export const saveAccounts = accounts => ({
    type: 'USER.SAVE_ACCOUNTS',
    accounts,
});

/**
 * Save provided web3 network ID
 *
 * @param {String} netowrk - Network ID
 */
export const saveNetwork = network => ({
    type: 'USER.SAVE_NETWORK',
    network,
});

/**
 * Set user locale
 *
 * @param {String} locale - A new locale
 */
export const setLocale = locale => ({ type: 'USER.SET_LOCALE', locale });
