import React from 'react';

const ReadOnlyRow = ({ person }) => {
  return (
    <tr>
      <td>{person.fullName}</td>
      <td>{person.address}</td>
      <td>{person.phoneNumber}</td>
      <td>{person.email}</td>
    </tr>
  );
};

export default ReadOnlyRow;
