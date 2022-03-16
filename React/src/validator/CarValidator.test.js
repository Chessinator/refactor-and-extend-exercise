import CarValidator from "./CarValidator"

describe('carValidator', () => {

    it('validates a valid car (lower bound Toyota)', () => {
        expect(CarValidator({make: "toyota", year: 1997})).toBe(true);
    });

    it('validates a valid car (upper bound Toyota)', () => {
        expect(CarValidator({make: "toyota", year: 2005})).toBe(true);
    });

    it('invalidates a invalid car (-1 lower bound Toyota)', () => {
        expect(CarValidator({make: "toyota", year: 1996})).toBe(false);
    });

    it('invalidates a invalid car (+1 upper bound Toyota)', () => {
        expect(CarValidator({make: "toyota", year: 2006})).toBe(false);
    });

    it('invalidates an unknown make', () => {
        expect(CarValidator({make: "doesNotExist", year: 2006})).toBe(false);
    });

    it('invalidates a too low year', () => {
        expect(CarValidator({make: "toyota", year: 1000})).toBe(false);
    });

    it('invalidates a too high year', () => {
        expect(CarValidator({make: "toyota", year: 9001})).toBe(false);
    });

    it('validates valid two digit years (97 toyota)', () => {
        expect(CarValidator({make: "toyota", year: 97})).toBe(true);
    });

    it('validates valid two digit years (05 toyota)', () => {
        expect(CarValidator({make: "toyota", year: 5})).toBe(true);
    });

    it('invalidates invalid two digit years (96 toyota)', () => {
        expect(CarValidator({make: "toyota", year: 96})).toBe(false);
    });

    it('invalidates invalid two digit years (06 toyota)', () => {
        expect(CarValidator({make: "toyota", year: 6})).toBe(false);
    });
});