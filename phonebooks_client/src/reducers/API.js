import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const req = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 1000,
    Headers: { 'X-Custom-Header': 'foobar' }
})

export const loadPhonebooks = createAsyncThunk(
    'contacts/loadPhonebooks',
    async ({ keyword, sort }) => {
        const { data } = await req.get('phonebooks', { params: { keyword, sort } });
        return data;
    }
);

export const loadPage = createAsyncThunk(
    'contacts/loadPage',
    async ({ page, keyword, sort }) => {
        const { data } = await req.get('phonebooks', { params: { page, keyword, sort } });
        return data;
    }
)

export const addPhonebooks = createAsyncThunk(
    'contacts/addPhonebooks',
    async (phonebooks) => {
        const { data } = await req.post('phonebooks', phonebooks);
        return data;
    }
)


export const updatePhonebooks = createAsyncThunk(
    'contacts/updatePhonebooks',
    async ({ id, contact }) => {
        const { data } = await req.put(`phonebooks/${id}`, contact);
        return data;
    }
)

export const updateAvatar = createAsyncThunk(
    'contacts/updateAvatar',
    async ({ id, formData }) => {
        const { data } = await req.put(`phonebooks/${id}/avatar`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
        return data;
    }
)

export const deletePhonebooks = createAsyncThunk(
    'contacts/deletePhonebooks',
    async ({ id }) => {
        const { data } = await req.delete(`phonebooks/${id}`);
        return data;
    }
)

