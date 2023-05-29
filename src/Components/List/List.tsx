import React, { useState } from "react";
import "./List.css";

interface UserData {
  id: number;
  name: string;
  role: string;
  status: string;
}

interface ListProps {
  applicants: UserData[];
  search: string;
  handleUpdateUser: (updatedUser: UserData) => void;
  onDelete: (id: number) => void;
}

const List: React.FC<ListProps> = ({
  applicants,
  search,
  handleUpdateUser,
  onDelete,
}) => {
  const [isApplicantFormOpen, setApplicantFormOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState<UserData | null>({
    id: 0,
    name: "",
    role: "",
    status: "",
  });
  const handleSubmit = () => {
    if (selectedApplicant) {
      handleUpdateUser(selectedApplicant);
    }
    setApplicantFormOpen(!isApplicantFormOpen);
  };
  const handleSelectApplicant = (applicant: UserData) => {
    setSelectedApplicant(applicant);
    setApplicantFormOpen(!isApplicantFormOpen);
  };
  //const [isDeleteClicked, setDeleteClicked] = useState(false);
  const handleDelete = (id: number) => {
    onDelete(id);
    setApplicantFormOpen(!isApplicantFormOpen);
  };
  return (
    <>
      {isApplicantFormOpen && (
        <div
          className="modal"
          onClick={() => handleSelectApplicant(selectedApplicant!)}
        >
          <div
            className="modal-content"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              className="delete-button"
              onClick={() => handleDelete(selectedApplicant!.id)}
            ></button>
            <h3>Name</h3>
            <input
              type="text"
              placeholder="Applicant's name"
              value={selectedApplicant?.name || ""}
              onChange={(e) => {
                setSelectedApplicant({
                  ...selectedApplicant!,
                  id: selectedApplicant!.id,
                  name: e.target.value,
                });
              }}
            />

            <br />
            <h3>Role</h3>
            <input
              type="text"
              placeholder="Applicant's role"
              value={selectedApplicant?.role || ""}
              onChange={(e) => {
                setSelectedApplicant({
                  ...selectedApplicant!,
                  id: selectedApplicant!.id,
                  role: e.target.value,
                });
              }}
            />
            <br />
            <h3>ID</h3>
            <input
              type="text"
              placeholder="Applicant's id"
              value={selectedApplicant?.id || ""}
              onChange={(e) => {
                setSelectedApplicant({
                  ...selectedApplicant!,
                  id: parseInt(e.target.value),
                });
              }}
            />
            <br />
            <h3>Status</h3>
            <input
              type="text"
              placeholder="Applicant's status"
              value={selectedApplicant?.status || ""}
              onChange={(e) => {
                setSelectedApplicant({
                  ...selectedApplicant!,
                  status: selectedApplicant!.status,
                  role: e.target.value,
                });
              }}
            />
            <div className="submit-button-container">
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="cards-wrapper">
        <div className="cards">
          {applicants
            .filter((applicant) =>
              applicant.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((applicant) => (
              <div
                key={applicant.id}
                className="card"
                onClick={() => handleSelectApplicant(applicant)}
              >
                <h2>{applicant.name}</h2>
                <p>
                  Role: {applicant.role} - Status: {applicant.status}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default List;
