import {
    ADD_USER,
    REMOVE_USER,
    UPDATE_USER
} from '../../actions/Users/Users.js'

const defaultUser = state => ({
    id: nextId(state),
    firstName: "",
    lastName: "",
    email: ""
})

const Users = (
    state = [],
    action = {}
) => {

    switch (action.type) {
        case ADD_USER:
            const user = { ...defaultUser(state), ...action.payload.user };
            return  [...state, user];

        case REMOVE_USER:
            const id = action.payload.user.id;
            return [...state.filter(user => user.id !== id)];
        
        case UPDATE_USER:
            const newUser = action.payload.user
            return [...state.map(user => user.id === newUser.id ? {...user, ...newUser} : user)];

        default:
            return state;
    }

}
export default Users

const nextId = (state) => {
    return 1 + state.reduce((maxId, user) => Math.max(user.id ?? 0, maxId), -1);
}