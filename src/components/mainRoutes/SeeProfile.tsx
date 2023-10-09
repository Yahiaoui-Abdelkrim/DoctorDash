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
      <h2>{name}</h2>
      <p>{userName}</p>
      <p>{favColor}</p>
    </div>
  );
};

export default ProfileComponent;
