import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://660c539b3a0766e85dbdeec5.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('contacts');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contactInfo, thunkAPI) => {
  try {
    const { data } = await axios.post('contacts', contactInfo);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);