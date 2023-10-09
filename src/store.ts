import { configureStore } from "@reduxjs/toolkit";
import updateReducer from "./features/Profile/profileSlice";
import usersReducer from "./features/users/usersSlice";
import medicalHistoryReducer from "./features/medicalHistory/medicalHistorySlice";

export const store = configureStore({
  reducer: {
    update: updateReducer,
    users: usersReducer,
    medicalhistory: medicalHistoryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
