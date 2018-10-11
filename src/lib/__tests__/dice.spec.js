import Web3 from 'web3';
import {
    getWinAmount,
    setBitsForIndexes,
    maskToBet,
    computeOutcome,
} from '../dice';

describe('math', () => {
    describe('getWinAmount', () => {
        it('should return -1 for invalid rollUnder', () => {
            expect(getWinAmount(1, 6, 0)).toEqual(-1);
            expect(getWinAmount(1, 6, 7)).toEqual(-1);
        });

        it('should return -1 if amount is less then fee', () => {
            expect(getWinAmount(0.0001, 6, 1)).toEqual(-1);
        });

        it('should calculate correct win amount for dice with modulo 2', () => {
            expect(getWinAmount(0.05, 2, 1)).toEqual(0.099);
        });

        it('should calculate correct win amount for dice with modulo 6', () => {
            expect(getWinAmount(0.05, 6, 1)).toEqual(0.297);
            expect(getWinAmount(0.05, 6, 2)).toEqual(0.148);
            expect(getWinAmount(0.05, 6, 3)).toEqual(0.099);
            expect(getWinAmount(0.05, 6, 4)).toEqual(0.074);
            expect(getWinAmount(0.05, 6, 5)).toEqual(0.059);
        });

        it('should calculate correct win amount for dice with modulo 36', () => {
            expect(getWinAmount(0.05, 36, 1)).toEqual(1.782);
            expect(getWinAmount(0.05, 36, 3)).toEqual(0.594);
            expect(getWinAmount(0.05, 36, 6)).toEqual(0.297);
        });
    });

    describe('setBitsForIndexes', () => {
        it('should return single turned on bit for single index', () => {
            expect(setBitsForIndexes([1])).toEqual(0b1);
            expect(setBitsForIndexes([2])).toEqual(0b10);
            expect(setBitsForIndexes([3])).toEqual(0b100);
            expect(setBitsForIndexes([4])).toEqual(0b1000);
        });

        it('should return multiple turned on bits for multiple indexes', () => {
            expect(setBitsForIndexes([1, 2])).toEqual(0b11);
            expect(setBitsForIndexes([1, 2, 3])).toEqual(0b111);
            expect(setBitsForIndexes([1, 2, 3, 4])).toEqual(0b1111);
        });
    });

    describe('maskToBet', () => {
        it('should return array with one bet', () => {
            expect(maskToBet('10')).toEqual([2]);
        });

        it('should return array with multiple bets', () => {
            expect(maskToBet('101010')).toEqual([6, 4, 2]);
        });
    });

    describe('computeOutcome', () => {
        it('should return correct outcome for game with modulo 6 for provided arguments', () => {
            const betMask = 21;
            const betBlockHash =
                '0x43f440fe1e28bc30eea8f10d65d4b5e2f774e8d4e1682c898f8ceda68c4274a3';
            const reveal =
                '0x1be8be1546ca11aa79df6770b63594b8d4c6ee02d77bfb4a65c2de962ee8b5c2';

            const expectedResult = {
                bets: ['1', '3', '5'],
                win: '6',
                entropy:
                    'ba4c548267f02af267da07ce7b26fab9e659eec16a7d58982468483535f514a5',
                jackpot: 80,
            };

            expect(
                computeOutcome({
                    modulo: 6,
                    betMask,
                    betBlockHash,
                    reveal,
                }),
            ).toEqual(expectedResult);
        });
    });
});
