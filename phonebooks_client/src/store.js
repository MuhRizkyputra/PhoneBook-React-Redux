import { configureStore } from "@reduxjs/toolkit";
import  resetContacts  from "./reducers/phonebook";


export const store = configureStore({
    reducer: {
        contacts: resetContacts
    }
})