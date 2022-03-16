import {
    ADD_CAR,
    REMOVE_CAR,
    UPDATE_CAR
} from '../../actions/Cars/Cars.js'

const defaultCar = state => ({
    id: nextId(state),
    make: "unknown",
    model: "unknown",
    year: undefined
})

const Cars = (
    state = [],
    action = {}
) => {

    switch (action.type) {
        case ADD_CAR:
            const car = { ...defaultCar(state), ...action.payload.car };
            return  [...state, car];

        case REMOVE_CAR:
            const id = action.payload.car.id;
            return [...state.filter(car => car.id !== id)];
        
        case UPDATE_CAR:
            const newCar = action.payload.car
            return [...state.map(car => car.id === newCar.id ? {...car, ...newCar} : car)];

        default:
            return state;
    }

}
export default Cars

const nextId = (state) => {
    return 1 + state.reduce((maxId, car) => Math.max(car.id ?? 0, maxId), -1);
}