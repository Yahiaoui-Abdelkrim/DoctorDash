import { createSlice } from "@reduxjs/toolkit";

export interface Profile {
  name: string;
  userName: string;
  favColor: string;
}
const initialState = {
  name: "karim",
  userName: "Kar.s",
  favColor: "blue",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    update: (state, action) => {
      const { name, userName, favoriteColor } = action.payload;
      state.name = name;
      state.userName = userName;
      state.favColor = favoriteColor;
    },
  },
});

export const { update } = profileSlice.actions;
export default profileSlice.reducer;
