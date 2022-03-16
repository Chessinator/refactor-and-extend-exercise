import {
    ADD_COMPANY,
    REMOVE_COMPANY,
    UPDATE_COMPANY
} from '../../actions/Companies/Companies.js'

const defaultCompany = state => ({
    id: nextId(state),
    name: "",
    adress: "",
    VATNumber: "",
    email: ""
})

const Companies = (
    state = [],
    action = {}
) => {

    switch (action.type) {
        case ADD_COMPANY:
            const company = { ...defaultCompany(state), ...action.payload.company };
            return  [...state, company];

        case REMOVE_COMPANY:
            const id = action.payload.company.id;
            return [...state.filter(company => company.id !== id)];
        
        case UPDATE_COMPANY:
            const newCompany = action.payload.company
            return [...state.map(company => company.id === newCompany.id ? {...company, ...newCompany} : company)];

        default:
            return state;
    }

}
export default Companies

const nextId = (state) => {
    return 1 + state.reduce((maxId, company) => Math.max(company.id ?? 0, maxId), -1);
}