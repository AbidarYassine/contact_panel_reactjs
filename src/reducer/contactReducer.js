const initialState = {
    contacts: [
        {
            id: 1,
            name: "ahmed abidar",
            username: "abidar",
            email: "ahmed@gmail.com"
        },
        {
            id: 2,
            name: "yassine abidar",
            username: "abidar",
            email: "abidar@gmail.com"
        },
        {
            id: 3,
            name: "issam abidar",
            username: "abidar",
            email: "issam@gmail.com"
        }
    ]
}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_CONTACTS':
            return {
                ...state
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
