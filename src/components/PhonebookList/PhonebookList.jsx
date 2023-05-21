import { useDispatch, useSelector } from 'react-redux';
import {selectFilteredContacts} from '../../redux/contacts/selectors';
import {deleteContact} from '../../redux/contacts/operations';
import s from '../PhonebookList/PhonebookList.module.css';
import Button from '@mui/material/Button';


export default function PhoneList({ openModal }) {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  

    return (
       <div className={s.item_list}>
        {filteredContacts.map(({ id, name, number }) => (        
          <li className={s.item_text}
            key={id}>
            <div >
            <p>Name: {name.toUpperCase()}</p>
            <p>Number: {number} </p>            
            </div>
            <div>
              <Button
              type="button"
              fullWidth
              size="small"
              onClick={() => openModal({ id, name, number })}
              >
                Update
              </Button>
              <Button
              type="button"
              fullWidth
              size="small"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>
              </div>
      </li>                  
        ))}
         </div>
  );
};



