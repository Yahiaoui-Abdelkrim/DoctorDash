import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
// const url = 'apiURL';

// export const getProfile = createAsyncThunk(
//   'profile/getProfle',
//   async (name, thunkAPI) => {
//     try {

//       const resp = await axios(url);

//       return resp.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue('something went wrong');
//     }
//   }
// );

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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getProfile.pending, (state) => {

  //     })
  //     .addCase(getProfile.fulfilled, (state, action) => {

  //     })
  //     .addCase(getProfile.rejected, (state, action) => {

  //     });
  // },
});

export const { update } = profileSlice.actions;
export default profileSlice.reducer;
