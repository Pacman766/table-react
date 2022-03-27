import React from 'react';

const ReadOnlyRow = ({ person, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{person.fullName}</td>
      <td>{person.address}</td>
      <td>{person.phoneNumber}</td>
      <td>{person.email}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, person)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(person.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
