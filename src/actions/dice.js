// @flow

import type { DiceBet } from '../types';

/**
 * Place a bet for dice game
 *
 * @param {Function} resolve - A resolve function to be called in positive scenario
 * @param {Function} resolve - A reject function to be called in negative scenario
 * @param {Object} payload - A payload with bet details to provide to the resolver
 */
export const placeBet = (
    resolve: Function,
    reject: Function,
    payload: DiceBet,
) => ({
    type: 'DICE.PLACE_BET_ASYNC',
    resolve,
    reject,
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
