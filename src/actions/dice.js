// @flow

import type { DiceBet } from '../types';

/**
 * Place a bet for dice game
 *
 * @param {Function} resolve - A resolve function to be called in positive scenario
 * @param {Function} resolve - A reject function to be called in negative scenario
 * @param {Object} payload - A payload with bet details to provide to the resolver
 */
export const placeBet = (web3: Object, payload: DiceBet) => ({
    type: 'DICE.PLACE_BET_ASYNC',
    web3,
    payload,
});

/**
 * Bet placement has started
 */
export const placeBetStart = (payload: DiceBet) => ({
    type: 'DICE.PLACE_BET_START',
    payload,
});

/**
 * Bet placement has succeeded
 */
export const placeBetSuccess = (transactionHash: String) => ({
    type: 'DICE.PLACE_BET_SUCCESS',
    transactionHash,
});

/**
 * Bet placement has failed because of specified reason
 */
export const placeBetFail = (message: string) => ({
    type: 'DICE.PLACE_BET_FAIL',
    message,
});

/**
 * Filter history of games
 *
 * @param {Object} filters - Set of filters
 */
export const filterHistory = (filters: { gambler: string }) => ({
    type: 'DICE.FILTER_HISTORY',
    filters,
});
