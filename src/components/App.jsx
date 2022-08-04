import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import css from './App.module.css';

export default function App() {

    return (
      <div className={css.wrapper}>
        <h1 className={css.wrapper__title}>Phonebook</h1>
        <Form />
        <h1 className={css.wrapper__title}>Contacts :</h1>
        <Filter  />
          <ContactList />
      </div>
    )
};
