import React from 'react';

const EditableRow = () => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter name"
          name="fullName"
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter address"
          name="address"
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter phone number"
          name="phoneNumber"
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter email"
          name="email"
        />
      </td>
    </tr>
  );
};

export default EditableRow;
