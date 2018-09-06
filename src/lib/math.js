/**
 * Games math helpers
 */

import { floor } from 'lodash';

import {
    HOUSE_EDGE_MINIMUM_AMOUNT,
    HOUSE_EDGE_PERCENT,
    JACKPOT_FEE,
    MIN_JACKPOT_BET,
} from '../config/const';

export const getDiceWinAmount = (amount, modulo, rollUnder) => {
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
