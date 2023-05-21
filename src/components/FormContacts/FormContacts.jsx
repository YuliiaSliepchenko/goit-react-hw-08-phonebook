import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { contactAdd } from '../../redux/contacts/operations';
import s from './FormContacts.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




export default function Form() {
  
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

   
  const handleSubmit = e => {
  e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isNameDublicated = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    const payload = {
      name: name,
      number: number,
    };
        isNameDublicated
      ? alert(`${name} is already in contacts!`)
      : dispatch(contactAdd(payload));
    form.reset();
   }; 

   
    return ( 
                
         <form className={s.form} action='' onSubmit={handleSubmit}>
            <h2 className={s.title}>Name</h2>
        <label className={s.form_label} htmlFor="name">
          <TextField
        fullWidth
        label="Name"
        id="name"
        name="name"
        placeholder="Enter contact name..."
        required
      />
            </label>
            <h2 className={s.title}>Number</h2>
           <label className={s.form_label} htmlFor="number">
         <TextField
        fullWidth
        label="Number"
        id="number"
        name="number"
        placeholder="Enter contact phone number..."
        required
      />
            </label>
        <Button variant="outlined" type="submit">
          Add contacts
        </Button>
          </form>
         );
      }
    
  
