import { createSlice } from "@reduxjs/toolkit";
import medicalHistory from "../../data/medicalHistory";

export interface Patient {
  id: number;
  name: string;
  Age: number;
  Gender: string;
  Diagnosis: string;
  Last_visit: string;
}
const initialState = {
  medicalHistoryData: medicalHistory,
};
// const url = 'apiURL';

// export const getHistory = createAsyncThunk(
//   'history/getHistory',
//   async (name, thunkAPI) => {
//     try {

//       const resp = await axios(url);

//       return resp.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue('something went wrong');
//     }
//   }
// );
const medicalHistorySlice = createSlice({
  name: "medicalData",
  initialState,
  reducers: {
    update: () => {},
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getHistory.pending, (state) => {

  //     })
  //     .addCase(getHistory.fulfilled, (state, action) => {

  //     })
  //     .addCase(getHistory.rejected, (state, action) => {

  //     });
  // },
});

// console.log(cartSlice);
export const { update } = medicalHistorySlice.actions;

export default medicalHistorySlice.reducer;
