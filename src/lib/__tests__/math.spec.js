import { getDiceWinAmount } from '../math';

describe('math', () => {
    describe('getDiceWinAmount', () => {
        it('should return -1 for invalid rollUnder', () => {
            expect(getDiceWinAmount(1, 6, 0)).toEqual(-1);
            expect(getDiceWinAmount(1, 6, 7)).toEqual(-1);
        });

        it('should return -1 if amount is less then fee', () => {
            expect(getDiceWinAmount(0.0001, 6, 1)).toEqual(-1);
        });

        it('should calculate correct win amount for dice with modulo 2', () => {
            expect(getDiceWinAmount(0.05, 2, 1)).toEqual(0.099);
        });

        it('should calculate correct win amount for dice with modulo 6', () => {
            expect(getDiceWinAmount(0.05, 6, 1)).toEqual(0.297);
            expect(getDiceWinAmount(0.05, 6, 2)).toEqual(0.148);
            expect(getDiceWinAmount(0.05, 6, 3)).toEqual(0.099);
            expect(getDiceWinAmount(0.05, 6, 4)).toEqual(0.074);
            expect(getDiceWinAmount(0.05, 6, 5)).toEqual(0.059);
        });

        it('should calculate correct win amount for dice with modulo 36', () => {
            expect(getDiceWinAmount(0.05, 36, 1)).toEqual(1.782);
            expect(getDiceWinAmount(0.05, 36, 3)).toEqual(0.594);
            expect(getDiceWinAmount(0.05, 36, 6)).toEqual(0.297);
        });
    });
});
