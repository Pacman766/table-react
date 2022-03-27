import { Fragment, useState } from 'react';
import './App.css';
import util from './util.json';
import { nanoid } from 'nanoid';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

function App() {
  const [persons, setPersons] = useState(util);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });
  const [editPersonId, setEditPersonId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const handleAddFormData = (e) => {
    e.preventDefault();

    const inputName = e.target.getAttribute('name');
    const inputValue = e.target.value;

    const newFormData = { ...addFormData };

    newFormData[inputName] = inputValue;

    setAddFormData(newFormData);
  };

  const handleSubmitFormData = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    const newContacts = [...persons, newContact];
    setPersons(newContacts);
  };

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditPersonId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleEditFormData = (e) => {
    e.preventDefault();

    const editName = e.target.getAttribute('name');
    const editValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[editName] = editValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedFormData = {
      id: editPersonId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newPersons = [...persons];

    const index = persons.findIndex((person) => person.id === editPersonId);

    newPersons[index] = editedFormData;
    setPersons(newPersons);
    setEditPersonId(null);
  };

  const handleCancelClick = () => {
    setEditPersonId(null);
  };

  const handleDeleteClick = (personId) => {
    const newPersons = [...persons];

    const index = persons.findIndex((person) => person.id === personId);

    newPersons.splice(index, 1);

    setPersons(newPersons);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Adress</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => (
              <Fragment>
                {editPersonId === person.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormData={handleEditFormData}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    person={person}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add contact</h2>
      <form onSubmit={handleSubmitFormData}>
        <input
          name="fullName"
          required="required"
          placeholder="Enter name"
          type="text"
          onChange={handleAddFormData}
        />
        <input
          name="address"
          required="required"
          placeholder="Enter address"
          type="text"
          onChange={handleAddFormData}
        />
        <input
          name="phoneNumber"
          required="required"
          placeholder="Enter phoneNumber"
          type="text"
          onChange={handleAddFormData}
        />
        <input
          name="email"
          required="required"
          placeholder="Enter email"
          type="email"
          onChange={handleAddFormData}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
