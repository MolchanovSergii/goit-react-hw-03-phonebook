import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import '../index.css';
import ContactForms from './ContactForms/ContactForms';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitData = data => {
    const { contacts } = this.state;
    const isDuplicateName = contacts.some(contacts =>
      contacts.name.toLowerCase().includes(data.name.toLowerCase())
    );

    if (isDuplicateName) {
      alert(`${data.name} is alredy to contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
  };

  changeFilterData = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  renderFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalized = filter.toLowerCase();

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalized)
    );
  };

  deleteContact = deleteContactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== deleteContactID
      ),
    }));
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <h1>Phonebook</h1>
          <ContactForms onSubmit={this.formSubmitData} />
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilterData} />
          <ContactList
            dataUsers={this.renderFilterContacts()}
            deleteContact={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
