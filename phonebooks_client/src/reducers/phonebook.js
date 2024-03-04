import { createSlice } from "@reduxjs/toolkit";
import { addPhonebooks, loadPhonebooks, updatePhonebooks } from "./API";

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
            state.phonebooks = [];
            state.page = 1;
            state.pages = 1;
            state.limit = 30;
            state.total = 31;
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
            .addCase(addPhonebooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addPhonebooks.fulfilled, (state, action) => {
                state = {
                    ...state, phonebooks: [
                        {
                            id: action.payload.id,
                            name: action.payload.name,
                            phone: action.payload.phone
                        }, ...state.phonebooks.filter(data => data.id !== action.payload.id)], status: 'succeeded'
                }
                return state
            })
            .addCase(addPhonebooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(updatePhonebooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updatePhonebooks.fulfilled, (state, action) => {
                state.phonebooks = state.phonebooks.map((item) => {
                    if (item.id === action.payload.id) {
                        item.name = action.payload.name;
                        item.phone = action.payload.phone;
                    }
                    return item;
                })
                        state.status= 'succeeded'
            })
            .addCase(updatePhonebooks.rejected, (state, action) => {
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