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

const medicalHistorySlice = createSlice({
  name: "medicalData",
  initialState,
  reducers: {
    update: () => {},
  },
  extraReducers: () => {},
});

// console.log(cartSlice);
export const { update } = medicalHistorySlice.actions;

export default medicalHistorySlice.reducer;
