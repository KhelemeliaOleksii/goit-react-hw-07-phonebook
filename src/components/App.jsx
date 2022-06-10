import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm'
import ContactsList from './ContactList'
import Filter from './Filter'

const INITIAL_STATE = {
  filter: '',
  contacts: [],
}
export const App = () => {
  // const [filter, setFilter] = useState(INITIAL_STATE.filter);
  // const [contacts, setContacts] = useState(INITIAL_STATE.contacts);
  // const isFirstRender = useRef(true);

  // useEffect(() => {
  //   const dataLocalStorage = localStorage.getItem("contacts");
  //   if (dataLocalStorage) {
  //     const dataParse = JSON.parse(dataLocalStorage);
  //     setContacts(dataParse);
  //   }
  // }, []);
  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }
  //   localStorage.setItem("contacts", JSON.stringify(contacts))
  // }, [contacts])

  // const addNewContact = (data) => {
  //   if (isContactExist(data)) {
  //     const msg = `${data.name} is already in contacts`
  //     alert(msg);
  //     return;
  //   }
  //   setContacts((contacts) => {
  //     const newContactArray = [...contacts];
  //     const { name, number } = data;
  //     const personId = nanoid();
  //     newContactArray.unshift({
  //       "id": personId,
  //       "name": name,
  //       "number": number,
  //     });
  //     return newContactArray;
  //   })
  // }
  // const filterContacts = () => {
  //   if (filter === '') {
  //     return contacts;
  //   }
  //   const filteredArray = contacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
  //   return filteredArray;
  // }
  // const isContactExist = (contact) => {
  //   const result = contacts.find(({ name }) =>
  //     contact.name.toLowerCase() === name.toLowerCase());
  //   return !!result
  // }
  // const removeContact = (id) => {
  //   setContacts((contacts) => contacts.filter(item => item.id !== id))
  // }
  // const filterHandler = ({ target }) => {
  //   setFilter(target.value);
  // }
  return (
    <>
      <h1>Phonebook </h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      {/* <Filter filterValue={filter} filterHandler={filterHandler} /> */}
      {/* <ContactsList contacts={filterContacts()} onClickDelete={removeContact} /> */}
    </>
  );
};
