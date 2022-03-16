export const ADD_CAR = "add_car";
export const REMOVE_CAR = "remove_car";
export const UPDATE_CAR = "update_car";

export const addCar = car => {
    return dispatch => {
        dispatch({
            type: ADD_CAR,
            payload: { car }
        })
    }
}

export const removeCar = car => {
    return dispatch => {
        dispatch({
            type: REMOVE_CAR,
            payload: { car }
        })
    }
}

export const updateCar = car => {
    return dispatch => {
        dispatch({
            type: UPDATE_CAR,
            payload: { car }
        })
    }
}