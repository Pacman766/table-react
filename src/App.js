import { useState } from 'react';
import './App.css';
import util from './util.json';

function App() {
  const [persons, setPersons] = useState(util);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const handleAddFormData = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  return (
    <div className="app-container">
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
            <tr>
              <td>{person.fullName}</td>
              <td>{person.address}</td>
              <td>{person.phoneNumber}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add contact</h2>
      <form>
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
