import PropTypes from 'prop-types';

export default function ContactList({ contacts, filter, onDeleteContact }) {
  const filteredContacts = findContact(contacts, filter);

  function findContact(contacts, filter) {
    return filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  }

  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}</span>: <span>{number}</span>{' '}
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))
      ) : (
        <li>
          <p>You don't have any contacts yet. Try adding a new contact.</p>
        </li>
      )}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};