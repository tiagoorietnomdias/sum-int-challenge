import React from "react";
import { useState } from "react";
import "./roletable.css";
interface RoleTableProps {
  roles: string[];
  onAddRole: (newRole: string) => void;
  onDelete: (roletodelete: string) => void;
}

const RoleTable: React.FC<RoleTableProps> = ({
  onAddRole,
  roles,
  onDelete,
}) => {
  const [isAddOpen, setAddOpen] = useState(false);
  const handleAdd = () => {
    setAddOpen(!isAddOpen);
  };
  const [role, setRole] = useState("");
  const handleSubmit = () => {
    if (role != "") {
      onAddRole(role);

      setRole("");
      handleAdd();
    }
  };
  const handleDelete = (role: string) => {
    onDelete(role);
  };
  return (
    <>
      {isAddOpen && (
        <div className="modal" onClick={handleAdd}>
          <div
            className="modal-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h3 className="role-title">New Role</h3>
            <input
              type="text"
              placeholder="new role name"
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
      <div className="role-table">
        <button className="add-table-button" onClick={handleAdd}>
          Add role
        </button>
        <h2 className="table-header">Role Table</h2>
        <table className="roles">
          {roles.map((role, index) => (
            <tr key={index}>
              <td>{role}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => handleDelete(role)}
                ></button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default RoleTable;
