import PropTypes from 'prop-types';
import Contact from './Contact';
import css from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => {
  return (
  <ul className={css.contacts}>
  {contacts.map(({name, phone, id}) => (
    <li key={id} className={css.contacts__item}>

      <Contact
        name={name}
        phone={phone}
        onDeleteContact={() => onDeleteContact(id)}
      />

    </li>
  ))}
</ul>)
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;
