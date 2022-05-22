const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (user, action) => ({ ...action.payload }),
    logout: (user, action) => ({}),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
