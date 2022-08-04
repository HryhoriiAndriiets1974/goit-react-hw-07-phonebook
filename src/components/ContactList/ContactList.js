import { useSelector } from 'react-redux';
import Contact from './Contact';
import Loader from 'components/Loader';
import {useGetContactsApiQuery} from '../../redux/contactsApi';
import css from './ContactList.module.css';

const ContactList = () => {
  const value = useSelector(state => state.filter);
  const {data, isLoading} = useGetContactsApiQuery();

  const filterContacts = () => {
    return (
      data &&
      data.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    ));
  };

  const filterRez = filterContacts();

  return (
    <>
      {isLoading && <Loader />}
        <ul className={css.contacts}>
          { data && !isLoading && filterRez.length > 0
            ? (
                filterRez.map(({id, name, phone}) => (
                  <li key={id} className={css.contacts__item}>
                    <Contact
                      id={id}
                      name={name}
                      phone={phone}
                    />
                  </li>
              ))
          ) : (
            <p className={css.contacts__message}>Your phonebook is empty !!!</p>
          )
          }
        </ul>
    </>
  )
}


export default ContactList;
