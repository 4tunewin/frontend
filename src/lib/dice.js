/**
 * Dice game helpers
 */

import { floor, reduce } from 'lodash';

import {
    HOUSE_EDGE_MINIMUM_AMOUNT,
    HOUSE_EDGE_PERCENT,
    JACKPOT_FEE,
    MIN_JACKPOT_BET,
} from '../config/const';

/**
 * Get dice win amount for specified bet and modulo
 *
 * @param {Number} amount    - Wager amount
 * @param {Number} modulo    - Modulo of a game
 * @param {Number} rollUnder - Number of winning outcomes
 */
export const getWinAmount = (amount, modulo, rollUnder) => {
    if (rollUnder <= 0 || rollUnder > modulo) {
        return -1;
    }

    const jackpotFee = amount >= MIN_JACKPOT_BET ? JACKPOT_FEE : 0;

    let houseEdge = (amount * HOUSE_EDGE_PERCENT) / 100;

    if (houseEdge < HOUSE_EDGE_MINIMUM_AMOUNT) {
        houseEdge = HOUSE_EDGE_MINIMUM_AMOUNT;
    }

    if (houseEdge + jackpotFee >= amount) {
        return -1;
    }

    return floor(((amount - houseEdge - jackpotFee) * modulo) / rollUnder, 3);
};

/**
 * Conver array of bets into binary bet mask
 *
 * @param {Array} bets - List of bets
 */
export const getBetMask = bets => {
    return reduce(
        bets,
        (result, bet) => {
            return result ^ (1 << (bet - 1));
        },
        0,
    );
};
