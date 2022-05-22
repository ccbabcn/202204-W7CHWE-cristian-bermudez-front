import userReducer, { loginActionCreator } from "./userSlice";

describe("Given an userReducer", () => {
  describe("When it's loginActionCreator receives an unexpected action type", () => {
    test("Then it shuold return the same state", () => {
      const initialState = {};
      const unexpectedActionType = { type: "unexpected" };

      const newState = userReducer(initialState, unexpectedActionType);

      expect(newState).toEqual(initialState);
    });
  });

  describe("When it's loginActionCreator receives an login action type and a user", () => {
    test("Then it shuold return a new state with the logged in user", () => {
      const initialState = {};
      const userToLogIn = { username: "Pepe55", id: "10" };

      const loginUser = loginActionCreator(userToLogIn);
      const newState = userReducer(initialState, loginUser);

      expect(newState).toEqual(userToLogIn);
    });
  });

  describe("When it's logoutActionCreator receives an logout action type and a user is logged in", () => {
    test("Then it shuold return a new state without any user", () => {
      const initialState = { username: "Pepe55", id: "10" };
      const expectedState = {};

      const logout = loginActionCreator();
      const newState = userReducer(initialState, logout);

      expect(newState).toEqual(expectedState);
    });
  });
});
