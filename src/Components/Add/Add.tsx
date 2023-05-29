import React, { useState } from "react";
import "./Add.css";
interface UserData {
  id: number;
  name: string;
  role: string;
  status: string;
}
interface AddProps {
  onAddApplicant: (newApplicant: UserData) => void;
  roles: string[];
}

export default function Add({ onAddApplicant, roles }: AddProps) {
  const [isAddFormOpen, setAddFormOpen] = useState(false);
  const [id, setId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const handleReportModal = () => {
    setAddFormOpen(!isAddFormOpen);
  };

  const handleSubmit = () => {
    if (roles.includes(role)) {
      onAddApplicant({ id: id!, name, role, status });
      setId(null);
      setName("");
      setRole("");
      setStatus("");
      handleReportModal();
    } else {
      setRole("ROLE NOT VALID"); //?
    }
  };

  return (
    <>
      {isAddFormOpen && (
        <div className="modal" onClick={handleReportModal}>
          <div
            className="modal-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h3>Name</h3>
            <input
              type="text"
              placeholder="Applicant's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <h3>Role</h3>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select role</option>
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <br />
            <h3>ID</h3>
            <input
              placeholder="Applicant's ID"
              value={id || ""}
              onChange={(e) => setId(parseInt(e.target.value))}
            />
            <br />
            <h3>Status</h3>
            <input
              placeholder="Applicant's status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <div className="submit-button-container">
              <button className="submitbutton" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="btn-add" onClick={handleReportModal}></div>
    </>
  );
}
