// @flow

import type { DiceBet } from '../types';

/**
 * Place a bet for dice game
 */
export const placeBet = (payload: DiceBet) => ({
    type: 'DICE.PLACE_BID_ASYNC',
    payload,
});
