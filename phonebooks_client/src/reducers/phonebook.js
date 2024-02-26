import { createSlice } from "@reduxjs/toolkit";
import { loadPhonebooks } from "./API";

const initialState = {
    phonebook: [],
    status: 'idle',
    error: null
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        resetContacts: (state) => {
            state.phonebook = [];

            state.status = 'idle';
            state.error = null;
        }
    },

    extraReducers: (builder) => {
        builder

            .addCase(loadPhonebooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadPhonebooks.fulfilled, (state, action) => {
                state = { ...state, ...action.payload, status: 'succeeded' }
                return state
            })
            .addCase(loadPhonebooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
    }
})

export const selectPhonebooks = (state) => {
    return state.contacts
}

export const { resetContacts } = contactsSlice.actions;

export default contactsSlice.reducer;