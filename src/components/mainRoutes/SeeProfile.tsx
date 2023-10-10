import React from "react";
import { useSelector } from "react-redux";
import { Profile } from "../../features/Profile/profileSlice";
import "../../styles/profile.css";

interface StoreState {
  update: Profile;
}

const ProfileComponent: React.FC = () => {
  const { name, userName, favColor } = useSelector(
    (store: StoreState) => store.update
  );
  return (
    <div className="profile">
      <h2>Name: {name}</h2>
      <br />
      <p>UserName: {userName}</p>
      <p>favorite color: {favColor}</p>
    </div>
  );
};

export default ProfileComponent;
