import React, { useState } from "react";
import "../../styles/modifyProfile.css";
import { useDispatch } from "react-redux";
import { update } from "../../features/Profile/profileSlice";

interface FormState {
  name: string;
  userName: string;
  favoriteColor: string;
}

const FormComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState<FormState>({
    name: "",
    userName: "",
    favoriteColor: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(update(formState));
    setFormState({
      name: "",
      userName: "",
      favoriteColor: "",
    });
  };

  return (
    <form>
      <h3>Update Profile Data</h3>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
      />
      <label>Username:</label>
      <input
        type="text"
        name="userName"
        value={formState.userName}
        onChange={handleChange}
      />
      <label>Favorite Color:</label>
      <input
        type="text"
        name="favoriteColor"
        value={formState.favoriteColor}
        onChange={handleChange}
      />
      <button className="btn" onClick={handleUpdate}>
        Update
      </button>
    </form>
  );
};

export default FormComponent;
