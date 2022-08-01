// import { useState, useEffect } from "react";
// import {nanoid} from 'nanoid';
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import {  addItems,
          delItems,
          updateFilter
         } from "redux/Slice";
import css from './App.module.css';

// const initialContact = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   { id: 'id-5', name: 'Gordon Dikson', number: '228-98-28' },
// ];

export default function App() {

  // const inicialeContacts = () => {
  //   return JSON.parse(localStorage.getItem('contacts')) || initialContact;
  // };

  // const [contacts, setContacts] = useState(inicialeContacts());
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts]);

  const { items } = useSelector(state => state.items);
  // console.log(items);
  const value = useSelector(state => state.filter);
  // console.log(value);
  const delContact = contactId => {
      // setContacts(contacts.filter(contact => contact.id !== contactId));
      // setFilter('');
      dispatch(delItems(contactId));
      dispatch(updateFilter(''));
  };

  const dispatch = useDispatch();
  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //     if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
  //       return alert(`${contact.name} is already in contacts`);
  //     }
  //     if (contacts.some(contact => contact.number === number)) {
  //       return alert(`${contact.number} is already in contacts`);
  //     }
  //     setContacts([contact, ...contacts]);
  // };

  const filterContacts = () => {
    return items.filter(contact =>
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
        {/* <Form
          onSubmit={addContact}
        /> */}
        <Form
          onSubmit={contact => dispatch(addItems(contact))}
        />
        <h1 className={css.wrapper__title}>Contacts :</h1>
        <Filter
          value={value}
          onChange={changeFilter}
        />
        <ContactList
          contacts={filterContacts()}
          onDeleteContact={delContact}
        />
      </div>
    )
};
