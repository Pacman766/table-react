import React from 'react';

const EditableRow = ({
  editFormData,
  handleEditFormData,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter name"
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormData}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter address"
          name="address"
          value={editFormData.address}
          onChange={handleEditFormData}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter phone number"
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormData}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter email"
          name="email"
          value={editFormData.email}
          onChange={handleEditFormData}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
