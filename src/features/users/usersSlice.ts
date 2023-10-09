import { createSlice } from "@reduxjs/toolkit";
import Users from "../../data/users";

export type User = {
  id: number;
  name: string;
  email: string;
  address: string;
  accepted: boolean;
};

const initialState = {
  userItems: Users,
};

const cartSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    refuse: (state, action) => {
      const itemId = action.payload;
      state.userItems = state.userItems.filter((item) => item.id !== itemId);
    },
  },
  extraReducers: () => {},
});

// console.log(cartSlice);
export const { refuse } = cartSlice.actions;

export default cartSlice.reducer;
