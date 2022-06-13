const selectorConfigureContactsToShow = ({ contacts }) => configureContactsToShow(contacts.items, contacts.filter);

/* function normilizedComparision
in: - "basicName"
    - "testName" 
do: - check if the nomalized "basicName" includes the nomalized "testName"
out:- true - the nomalized "basicName" includes the nomalized "testName"
    - false - opposite case
*/
const normilizedComparision = (basicName, testName) =>
    basicName.toLowerCase().includes(testName.toLowerCase());

/* function configureContactsToShow
in: - "contacts" - a list of contacts
    - "keyFilter" - a value of filter
do: - filter contacts that inlude "keyFilter"
out:- a list of filtered contacts
*/
const configureContactsToShow = (contacts, keyFilter) => {
    if (keyFilter === '') {
        return contacts;
    }
    return contacts.filter(({ name }) => normilizedComparision(name, keyFilter));
}

export default selectorConfigureContactsToShow;