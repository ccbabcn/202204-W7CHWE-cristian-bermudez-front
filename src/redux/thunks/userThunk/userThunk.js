import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../../features/userSlice/userSlice";

export const loginThunk = (userData) => async (dispatch) => {
  try {
    const endpoint = "/user/login";
    const url = `${process.env.REACT_APP_API_URL}${endpoint}`;

    const { data } = await axios.post(url, userData);
    const userInfo = jwtDecode(data.token);
    debugger;
    localStorage.setItem("token", data.token);
    dispatch(loginActionCreator(userInfo));
  } catch (error) {
    return error.message;
  }
};
