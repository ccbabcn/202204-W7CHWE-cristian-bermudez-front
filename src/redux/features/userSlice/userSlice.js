const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: { username: "", name: "", id: "" },
  reducers: {
    login: (user, action) => ({ ...action.payload }),
  },
});

export const { login: loginActionCreator } = userSlice.actions;

export default userSlice.reducer;
