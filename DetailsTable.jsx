import React from "react";

function DetailsTable({ data, onEdit, onDelete }) {
  return (
    <table id="detailsTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Blood Group</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.designation}</td>
            <td>{item.blood}</td>
            <td>
              <button className="edit-btn" onClick={() => onEdit(index)}>Edit</button>
              <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DetailsTable;
