/**
 * Dice game helpers
 *
 * @flow
 */

import { floor, reduce } from 'lodash';
import { keccak256 } from 'js-sha3';
import BigNumber from 'bignumber.js';

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
export const getWinAmount = (
    amount: number,
    modulo: number,
    rollUnder: number,
) => {
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

export const eligebleForJackpot = (amount: string) => {
    return new BigNumber(amount).gte(
        window.web3.toWei(MIN_JACKPOT_BET, 'ether'),
    );
};

/**
 * Get outcome for game with modulo 6 (basic dice)
 *
 * @param {String} betMask      - A binary mask of placed bet
 * @param {String} betBlockHash - A hash of block when bet was placed
 * @param {String} reveal       - A secret number revelaed by croupier
 */
const computeDiceOutcome = ({ betMask, betBlockHash, reveal }) => {
    const options = ['1', '2', '3', '4', '5', '6'];
    const bets = indexesOfSetBits(betMask).map(index => options[index]);
    const entropy = encodePacked([reveal, betBlockHash]);
    const win = options[new BigNumber(entropy, 16).mod(6)];
    const jackpot =
        ((new BigNumber(entropy, 16)
            .idiv(6)
            .mod(1e3)
            .toNumber() +
            887) %
            1e3) +
        1;

    return {
        bets,
        win,
        entropy,
        jackpot,
    };
};

/**
 * Compute outcome for game with specified modulo
 *
 * @param {Number} modulo       - A game modulo (e.g. 2, 6, 12)
 * @param {String} betMask      - A binary mask of placed bet
 * @param {String} betBlockHash - A hash of block when bet was placed
 * @param {String} reveal       - A secret number revelaed by croupier
 */
export const computeOutcome = ({
    modulo,
    betMask,
    betBlockHash,
    reveal,
}: {
    modulo: number,
    betMask: string,
    betBlockHash: string,
    reveal: string,
}) => {
    const games = {
        '6': computeDiceOutcome,
    };

    return games[modulo]({ betMask, betBlockHash, reveal });
};

/**
 * Create a mask with set bits at provided indexes
 *
 * @param {Array} indexes - List of indexes
 */
export const setBitsForIndexes = (indexes: Array<number>) => {
    return reduce(
        indexes,
        (result, index) => {
            return result ^ (1 << (index - 1));
        },
        0,
    );
};

/**
 * Return array with positions of set bits for given number
 *
 * @param {Number} - The number to extract indexes of set bits
 */
export const indexesOfSetBits = (number: number) => {
    let indexes: Array<number> = [],
        index = 0;

    while (number) {
        if (number & 1) indexes.push(index);
        number = number >> 1;
        index++;
    }

    return indexes;
};

/**
 * Pack and encode to keccak256 array of hash values
 *
 * @param {Array} arr - An array of hashes to pack and encode
 */
export const encodePacked = (arr: Array<string>) => {
    const packed = arr.map(item => item.replace('0x', '')).join('');

    const blocks = [];
    for (let i = packed.length, j = 0; j < i; j += 2) {
        blocks.push(parseInt(packed.substr(j, 2), 16));
    }

    return keccak256(new Uint8Array(blocks));
};
