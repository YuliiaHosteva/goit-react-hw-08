import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, editContact, fetchContacts } from './operations';
import { logout } from '../auth/operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = state => {
  state.loading = false;
};
const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.unshift(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map(item => {
          if (item.id === action.payload.id) {
            item = action.payload;
          }
          return item;
        });
      })
      .addCase(editContact.rejected, handleRejected)
      .addCase(logout.fulfilled, state => {
        state.items = [];
        state.loading = false;
      });
  },
});

export default slice.reducer;