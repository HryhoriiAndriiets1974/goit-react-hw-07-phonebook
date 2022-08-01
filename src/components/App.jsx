// import { useState, useEffect } from "react";
// import {nanoid} from 'nanoid';
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateFilter } from "redux/Slice";
import {
    useGetContactsApiQuery,
    useDelContactMutation,
    useCreateContactMutation,
} from 'redux/contactsApi';
import css from './App.module.css';
import Loader from "./Loader";

export default function App() {
  const value = useSelector(state => state.filter);
  // console.log(value);
  const dispatch = useDispatch();
  const {data, isLoading} = useGetContactsApiQuery();
  const [delContact] = useDelContactMutation();
  const [newContact] = useCreateContactMutation();

  const addItems = ({name, phone}) => {
    const contact = {
      name,
      phone,
    };

    if (data.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return toast.info(`${contact.name} is already in contacts`);
    };
    newContact(contact);
  };

  const filterContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  const changeFilter = e => {
    // setFilter( e.currentTarget.value);
    dispatch(updateFilter(e.currentTarget.value));
  };

    return (
      <div className={css.wrapper}>
        <h1 className={css.wrapper__title}>Phonebook</h1>
        <ToastContainer
          autoClose={5000}
      />
        <Form
          onSubmit={addItems}
        />
        <h1 className={css.wrapper__title}>Contacts :</h1>
        <Filter
          value={value}
          onChange={changeFilter}
        />
        {isLoading && (
          <Loader />
        )}
        {data && (
          <ContactList
            contacts={filterContacts()}
            onDeleteContact={delContact}
          />)
        }
      </div>
    )
};
