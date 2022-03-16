export const ADD_USER = "add_user";
export const REMOVE_USER = "remove_user";
export const UPDATE_USER = "update_user";

export const addUser = user => {
    return dispatch => {
        dispatch({
            type: ADD_USER,
            payload: { user }
        })
    }
}

export const removeUser = user => {
    return dispatch => {
        dispatch({
            type: REMOVE_USER,
            payload: { user }
        })
    }
}

export const updateUser = user => {
    return dispatch => {
        dispatch({
            type: UPDATE_USER,
            payload: { user }
        })
    }
}