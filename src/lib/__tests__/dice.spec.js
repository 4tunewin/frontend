import { getWinAmount } from '../math';

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
});

// 2  - 1;1
// 3  - 1;2
// 4  - 1;3 2;2
// 6  - 1;5 2;4 3;3
// 7  - 1;6 2;5 3;4
// 8  - 2;6 3;5 4;4
// 9  - 3;6 4;5
// 10 - 6;4 5;5

// 01 000011 - 2,3

// 6      5      4      3      2      1
// 000001 000010 000100 001000 010000 100000 - 7
// 001001 010010 100100 001000 010000 100001 - 2,7,10
// 000011 000111 001110 011100 111000 110000 - 6,7,8
//                                  10000000

// 001111 011111 111110 111101 111010 110100 - 4,6,7,8,9,10
