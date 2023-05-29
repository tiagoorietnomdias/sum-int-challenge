import React, { useState } from "react";

import "./App.css";
import Search from "./Components/Search/Search";
import List from "./Components/List/List";
import Add from "./Components/Add/Add";
import RoleTable from "./Components/Roletable/roletable";

interface UserData {
  id: number;
  name: string;
  role: string;
  status: string;
}
interface RoleData {
  role: string;
}
export default function App() {
  const [applicants, setApplicants] = useState<UserData[]>([
    {
      id: 1,
      name: "Otto Blevins",
      role: "Backend",
      status: "Approved",
    },
    {
      id: 2,
      name: "Clara Hoffman",
      role: "Frontend",
      status: "Under Analysis",
    },
    {
      id: 3,
      name: "Deez",
      role: "Frontend",
      status: "Under Analysis",
    },
    {
      id: 4,
      name: "Blob",
      role: "Frontend",
      status: "Under Analysis",
    },
    {
      id: 5,
      name: "Quack",
      role: "Backend",
      status: "Under Analysis",
    },
  ]);

  const addApplicant = (newApplicant: UserData) => {
    setApplicants((prevApplicants) => [...prevApplicants, newApplicant]);
  };
  const [searchString, setSearchString] = useState("");
  const handleUpdateUser = (updatedUser: UserData) => {
    const updatedApplicants = applicants.map((applicant) =>
      applicant.id === updatedUser.id ? updatedUser : applicant
    );
    setApplicants(updatedApplicants);
  };
  const handleDelete = (id: number) => {
    setApplicants((prevApplicants) =>
      prevApplicants.filter((applicant) => applicant.id !== id)
    );
  };
  const [roles, setRoles] = useState<string[]>(["Frontend", "Backend"]);
  const addRole = (newRole: string) => {
    setRoles((prevRoles) => [...prevRoles, newRole]);
  };
  const handleDeleteRole = (roletodelete: string) => {
    setRoles((prevRoles) => prevRoles.filter((role) => role !== roletodelete));
  };

  return (
    <div className="app-container">
      <List
        applicants={applicants}
        search={searchString}
        handleUpdateUser={handleUpdateUser}
        onDelete={handleDelete}
      />
      <Add onAddApplicant={addApplicant} roles={roles} />
      <Search onSearch={setSearchString} />
      <RoleTable
        onAddRole={addRole}
        roles={roles}
        onDelete={handleDeleteRole}
      />
    </div>
  );
}
