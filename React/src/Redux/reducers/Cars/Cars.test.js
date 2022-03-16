import Cars from './Cars.js'
import {
    ADD_CAR,
    REMOVE_CAR,
    UPDATE_CAR
} from '../../actions/Cars/Cars.js'

describe('cars', () => {

    it('initializes with an empty state and returns it for an undefined action', () => {
        expect( Cars(undefined, undefined) ).toEqual( [] );
    });

    it('adds empty cars with unknown make and undefined year', () => {
        const resultCars = Cars(
            undefined,
            {
                type: ADD_CAR,
                payload: {}
            }
        );
        expect(resultCars.length).toBe(1);
        const car = resultCars[0];
        expect(car.id).toEqual(0)
        expect(car.make).toEqual("unknown")
        expect(car.model).toEqual("unknown")
        expect(car.year).toEqual(undefined)
    });

    it('adds valid cars', () => {
        const resultCars = Cars(
            undefined,
            {
                type: ADD_CAR,
                payload: { car: {
                    id: 9001,
                    make: 'volkswagen',
                    model: 'ID.5',
                    year: 2022
                }}
            }
        );
        const car = resultCars[0];
        expect(car.id).toEqual(9001);
        expect(car.make).toEqual('volkswagen');
        expect(car.model).toEqual('ID.5');
        expect(car.year).toEqual(2022);
    });

    it('removes nothing for invalid car removal', () => {
        const resultCars = Cars(
            [{ id: 0, make: 'volkswagen', model: 'ID.5', year: 2022 }],
            { type: REMOVE_CAR, payload: { car: {} } }
        );
        const car = resultCars[0];
        expect(car.id).toEqual(0);
        expect(car.make).toEqual('volkswagen');
        expect(car.model).toEqual('ID.5');
        expect(car.year).toEqual(2022);
    });

    it('removes a car by id', () => {
        const resultCars = Cars(
            [{ id: 0, make: 'volkswagen', model: 'ID.5', year: 2022 }],
            { type: REMOVE_CAR, payload: { car: { id: 0 } } }
        );
        expect(resultCars).toEqual([]);
    });

    it('update a car by id', () => {
        const resultCars = Cars(
            [{ id: 0, make: 'volkswagen', model: 'ID.5', year: 2022 }],
            { type: UPDATE_CAR, payload: { car: { id: 0, model: 'ID.3' } } }
        );
        const car = resultCars[0];
        expect(car.id).toEqual(0);
        expect(car.make).toEqual('volkswagen');
        expect(car.model).toEqual('ID.3');
        expect(car.year).toEqual(2022);
    });
});