export const ADD_COMPANY = "add_company";
export const REMOVE_COMPANY = "remove_company";
export const UPDATE_COMPANY = "update_company";

export const addCompany = company => {
    return dispatch => {
        dispatch({
            type: ADD_COMPANY,
            payload: { company }
        })
    }
}

export const removeCompany = company => {
    return dispatch => {
        dispatch({
            type: REMOVE_COMPANY,
            payload: { company }
        })
    }
}

export const updateCompany = company => {
    return dispatch => {
        dispatch({
            type: UPDATE_COMPANY,
            payload: { company }
        })
    }
}