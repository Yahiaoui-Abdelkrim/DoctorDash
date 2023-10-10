import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store"; // replace with your store location
import "../../styles/appointments.css";
import { refuse } from "../../features/users/usersSlice";
const UserList: React.FC = () => {
  const users = useSelector((store: RootState) => store.users.userItems);
  const dispatch = useDispatch();
  console.log(users);
  if (users.length > 0) {
    return (
      <div>
        <table className="table">
          <thead>
            <h3>Scheduled Appointments</h3>

            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    className="button refuse-button"
                    onClick={() => dispatch(refuse(user.id))}
                  >
                    Refuse
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
};

export default UserList;
