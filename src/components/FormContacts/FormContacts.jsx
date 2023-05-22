import s from './FormContacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isNamesDublicated = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    const payload = {
      name: name,
      number: number,
    };
    isNamesDublicated
      ? alert(`${name} is already in contacts.`)
      : dispatch(addContact(payload));

    form.reset();
  };
  return (
    <form className={s.wrapper} action="" onSubmit={onFormSubmit}>
      <TextField
        color="success"
        fullWidth
        label="Name"
        id="name"
        name="name"
        placeholder="Enter contact name..."
        required
      />
      <TextField
        color="success"
        fullWidth
        label="Number"
        id="number"
        name="number"
        placeholder="Enter contact phone number..."
        required
      
      />
      <Button className={s.btn} color="success" variant="contained" type="submit">
        Add contact
      </Button>
    </form>
  );
}