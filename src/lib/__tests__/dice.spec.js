import { getWinAmount, getBetMask } from '../dice';

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

    describe('getBetMask', () => {
        it('should return single turned on bit for single bet', () => {
            expect(getBetMask([1])).toEqual(0b1);
            expect(getBetMask([2])).toEqual(0b10);
            expect(getBetMask([3])).toEqual(0b100);
            expect(getBetMask([4])).toEqual(0b1000);
        });

        it('should return multiple turned on bits for complex bet', () => {
            expect(getBetMask([1, 2])).toEqual(0b11);
            expect(getBetMask([1, 2, 3])).toEqual(0b111);
            expect(getBetMask([1, 2, 3, 4])).toEqual(0b1111);
        });
    });
});
