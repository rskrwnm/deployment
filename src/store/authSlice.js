import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.productList.push(action.payload);
    },
  },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
