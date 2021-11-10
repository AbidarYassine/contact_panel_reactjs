const initialState = {
    contacts: []
}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_CONTACTS':
            return {
                ...state,
                contacts: action.payload
            }
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(el => el.id !== action.payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default: {
            return state;
        }
    }
}
