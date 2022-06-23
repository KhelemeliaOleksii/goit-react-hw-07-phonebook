import ContactItem from "components/ContactItem";
import styles from './ContactsList.module.css'
import { useGetContactsByNameQuery } from 'redux/contacts/contactsApi';
import Loader from '../Loader';
import { useSelector } from "react-redux";
import filterSelector from "redux/filter/filter-selectors";

const ContactsList = () => {
    const filter = useSelector(filterSelector);
    const { data: contactsFiltered, isFetching, isError } = useGetContactsByNameQuery(filter);

    const isShowContacts = contactsFiltered && !isError && !isFetching;

    const isContactPresent = contactsFiltered && contactsFiltered.length > 0;

    return (
        <>
            {isFetching && <Loader />}

            {isShowContacts &&
                (isContactPresent ?
                    <ul className={styles.List}>
                        {contactsFiltered.map((item) =>
                            <ContactItem key={item.id} contact={item} />
                        )}
                    </ul>
                    :
                    <p>No Contact</p>
                )
            }
        </>
    )
};

export default ContactsList;

