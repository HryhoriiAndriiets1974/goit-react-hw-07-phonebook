import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  useGetContactsApiQuery,
  useCreateContactMutation,
} from 'redux/contactsApi';
import css from './Form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const {data} = useGetContactsApiQuery();
  const [newContact] = useCreateContactMutation();

  const handleChange = e => {
    const {name, value} = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    };
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (data.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      resetForm();
      return toast.info(`${name} is already in contacts`);
    };
    if (name && phone) {
      await newContact({name: name, phone: phone}).unwrap();
    };
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  }

    return (
        <>
          <ToastContainer
          autoClose={5000}
          />
          <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.form__label}>
              Name :
              <input
                className={css.form__input}
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <br />
            <label className={css.form__label}>
              Number :
              <input
                className={css.form__input}
                type="tel"
                name="phone"
                value={phone}
                onChange={handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button className={css.form__btn} type="submit">
              Add contact
            </button>
          </form>
        </>
    )
}

export default Form;
