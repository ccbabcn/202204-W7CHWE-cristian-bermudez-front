import userReducer, { loginActionCreator } from "./userSlice";

describe("Given an userReducer", () => {
  describe("When it's loginActionCreator receives an unexpected action type", () => {
    test("Then it shuold return the same state", () => {
      const initialState = { username: "", name: "", id: "" };
      const unexpectedActionType = { type: "unexpected" };

      const newState = userReducer(initialState, unexpectedActionType);

      expect(newState).toEqual(initialState);
    });
  });

  describe("When it's loginActionCreator receives an login action type and a user", () => {
    test("Then it shuold return a new state with the logged in user", () => {
      const initialState = { username: "", name: "", id: "" };
      const userToLogIn = { username: "Pepe55", name: "Pepe", id: "10" };

      const loginUser = loginActionCreator(userToLogIn);
      const newState = userReducer(initialState, loginUser);

      expect(newState).toEqual(userToLogIn);
    });
  });
});
