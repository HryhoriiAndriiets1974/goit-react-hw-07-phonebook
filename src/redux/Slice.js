import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialContacts ={
  items: [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Gordon Dikson', number: '228-98-28' },
],}

export const itemsSlice = createSlice({
  name: 'items',
  initialState: initialContacts,
  reducers: {
    addItems: ({items}, action) => {
      const {name, number} = action.payload;
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      if (items.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        return alert(`${contact.name} is already in contacts`);
      }
      items.push(contact);
    },
    delItems: (state, action) => {
      const contactId = action.payload;
      state.items = state.items.filter(contact => contact.id !== contactId);
    },
  },
});

export const {addItems, delItems} = itemsSlice.actions;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter: (state, action) => action.payload,
  },
});

export const {updateFilter} = filterSlice.actions;
