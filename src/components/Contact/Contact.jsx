import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import css from '../Contact/Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
const Contact = ({
  contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.listItem}>
      <ul className={css.infoBlock}>
        <li className={css.wrap}>
          <FaUser />
          <p className={css.nameId}>{name}</p>
        </li>
        <li className={css.wrap}>
          <FaPhoneAlt />
          <p className={css.numberId}>{number}</p>
        </li>
      </ul>
      <button className={css.button} onClick={handleDeleteContact}>Delete</button>
    </div>
  );
};


export default Contact;