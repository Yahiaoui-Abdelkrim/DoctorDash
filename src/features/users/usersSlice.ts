import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Users from "../../data/users";
// const url = 'apiURL';

// export const getUsers = createAsyncThunk(
//   'users/getUsers',
//   async (name, thunkAPI) => {
//     try {

//       const resp = await axios(url);

//       return resp.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue('something went wrong');
//     }
//   }
// );

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

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    refuse: (state, action) => {
      const itemId = action.payload;
      state.userItems = state.userItems.filter((item) => item.id !== itemId);
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getUsers.pending, (state) => {

  //     })
  //     .addCase(getUsers.fulfilled, (state, action) => {

  //     })
  //     .addCase(getUsers.rejected, (state, action) => {

  //     });
  // },
});

// console.log(userSlice);
export const { refuse } = userSlice.actions;

export default userSlice.reducer;
