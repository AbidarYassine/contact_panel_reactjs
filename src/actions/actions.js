export const getContacts = () => {
    return {
        type: "GET_CONTACTS",
        payload: null
    }
}
export const deleteContact = (id) => {
    return {
        type: "DELETE_CONTACT",
        payload: id
    }
}
export const addContact = (contact) => {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}
