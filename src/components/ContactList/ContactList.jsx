import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const ContactList = ({ dataUsers, deleteContact }) => {
  return (
    <>
      <ul className="contact-list">
        {dataUsers.map(dataUser => (
          <li className="contact-item" key={dataUser.id}>
            {dataUser.name} : {dataUser.number}
            <button onClick={() => deleteContact(dataUser.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  dataUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
