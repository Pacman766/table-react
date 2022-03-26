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

  return (
    <div className="app-container">
      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Adress</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => (
              <Fragment>
                <EditableRow />
                <ReadOnlyRow person={person} />
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
