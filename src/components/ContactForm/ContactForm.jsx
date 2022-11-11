// import { useSelector, useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';

export default function ContactForm() {
  // const contacts = useSelector(state => state.phonebook.contacts);
  // const dispatch = useDispatch();

  // const addNewContact = (name, number) => {
  //   if (checkContactName(name)) {
  //     return alert(`${name} is already in contacts`);
  //   }

  //   if (checkContactNumber(number)) {
  //     return alert(`${number} is already in contacts`);
  //   }

  //   dispatch(addContact(name, number));
  // };

  // const checkContactName = contactName =>
  //   contacts.find(
  //     contact => contact.name.toLowerCase() === contactName.toLowerCase()
  //   );

  // const checkContactNumber = number =>
  //   contacts.find(contact => contact.number === number);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.elements.firstName.value;
    const lastName = form.elements.lastName.value;
    const name = `${firstName} ${lastName}`;
    const number = form.elements.number.value;
    console.log(name, number);

    // addNewContact(name, number);

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
