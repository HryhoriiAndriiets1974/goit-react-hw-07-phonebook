import { useState } from "react";
import css from './Form.module.css';

function Form(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

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
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({name, phone});
    resetForm();
  }

  const resetForm = () => {
    setName('');
    setPhone('');
  }

    return (
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
    )
}

export default Form;
