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
      {users.map((user: User) => (
        <div className="card" key={user.id}>
          <div className="container">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
            <p>Accepted: {user.accepted ? "Yes" : "No"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;
