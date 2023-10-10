import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "../../styles/seeUsers.css";

type User = {
  id: number;
  name: string;
  email: string;
  address: string;
  accepted: boolean;
};

const PatientList: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.userItems);

  return (
    <div className="grid-container">
      <h2>Users Accepted </h2>
      <br />
      <div className="card">
        <h2>Name</h2>
        <h2>Email</h2>
        <h2>Address</h2>
      </div>
      {users.map((user: User) => (
        <div className="card" key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.address}</p>
        </div>
      ))}
    </div>
  );
};

export default PatientList;
