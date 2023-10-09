import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  cartItems: object[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
