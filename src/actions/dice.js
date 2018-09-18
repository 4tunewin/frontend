// @flow

import type { DiceBet } from '../types';

/**
 * Place a bet for dice game
 */
export const placeBet = (payload: DiceBet) => ({
    type: 'DICE.PLACE_BET_ASYNC',
    payload,
});

/**
 * Bet placement has succeeded
 */
export const placeBetSucceeded = () => ({
    type: 'DICE.PLACE_BET_SUCCEEDED',
});

/**
 * Bet placement has failed because of specified reason
 */
export const placeBetFailed = (message: string) => ({
    type: 'DICE.PLACE_BET_FAILED',
    message,
});
