import axios from "axios";

export const getContacts = () => async dispatch => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
        type: "GET_CONTACTS",
        payload: res.data
    });
}
export const deleteContact = (id) => dispatch => {
    axios.delete("https://jsonplaceholder.typicode.com/users/" + id);
    dispatch({
        type: "DELETE_CONTACT",
        payload: id
    });
}
export const addContact = (contact) => async dispatch => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/users/", contact)
    console.log(res);
    dispatch({
        type: "ADD_CONTACT",
        payload: res.data
    })
}
