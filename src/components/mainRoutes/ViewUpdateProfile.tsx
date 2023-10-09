import React, { useState } from "react";
import "../../styles/profile.css";
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
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          name="userName"
          value={formState.userName}
          onChange={handleChange}
        />
      </label>
      <label>
        Favorite Color:
        <input
          type="text"
          name="favoriteColor"
          value={formState.favoriteColor}
          onChange={handleChange}
        />
      </label>
      <button className="btn" onClick={handleUpdate}>
        Update
      </button>
    </form>
  );
};

export default FormComponent;
