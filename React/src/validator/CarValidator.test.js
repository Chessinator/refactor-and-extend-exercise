import carValidator from "./carValidator"

describe('carValidator', () => {
    it('invalidates an undefined input', () => {
        expect(carValidator(undefined)).toBeFalse();
    });

    it('invalidates an empty object', () => {
        expect(carValidator({})).toBeFalse();
    });


    it('validates a valid car', () => {
        expect(carValidator({make: "toyota", year: 1997})).toBeFalse();
    });
});