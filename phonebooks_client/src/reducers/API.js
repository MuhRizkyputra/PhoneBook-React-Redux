import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const req = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 1000,
    Headers: { 'X-Custom-Header': 'foobar' }
})

export const loadPhonebooks = createAsyncThunk(
    'contacts/loadPhonebooks',
    async () => {
        const { data } = await req.get('phonebooks');
        return data;
    }
);

export const loadPage = createAsyncThunk(
    'contacts/loadPage',
    async () => {
        const { data } = await req.get('phonebooks');
        return data;
    }
)