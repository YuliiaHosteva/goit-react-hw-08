import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts?.filter(contact => {
      const includesName = contact.name.toLowerCase().includes(filter.toLowerCase());
      const includesNumber = contact.number.toLowerCase().includes(filter.toLowerCase());
      return includesName ? includesName : includesNumber;
    });
  }
);