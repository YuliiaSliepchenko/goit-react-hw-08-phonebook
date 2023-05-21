import Form from '../components/FormContacts/FormContacts';
import Filter from 'components/FilterName/FilterName';
import PhoneList from 'components/PhonebookList/PhonebookList';
import { useEffect, useState } from 'react';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import UpdateModal from 'components/UpdateModal/UpdateModal';

export default function ContactVisual() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const [showModal, setShowModal] = useState(false);
    const [contactToUpdate, setContactToUpdate] = useState({});

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const openModal = contact => {
        setShowModal(true);
        setContactToUpdate(contact);
    };
    const closeModal = () => {
        setShowModal(false);
        setContactToUpdate({});
    };

    return (
        <>
            {!showModal ? (
                <>
                    <h1>Phonebook</h1>
                    <Form />
                    <h2>Contacts</h2>
                    <Filter />
                    {isLoading && !error && <p>Loading tascs...</p>}

                    <PhoneList openModal={openModal} />
                </>
            ) : (
                <UpdateModal
                    closeModal={closeModal}
                    contactToUpdate={contactToUpdate}
                />
            )}
        </>
    );
}
