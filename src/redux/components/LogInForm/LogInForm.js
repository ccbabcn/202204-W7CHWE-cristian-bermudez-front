import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../thunks/userThunk/userThunk";
import { LogInFormStyles } from "./LogInFormStyles";

const LogInForm = () => {
  const initialFormState = {
    username: "",
    password: "",
  };

  const [actualLogInFormState, setLogInFormState] = useState(initialFormState);
  const [buttonIsAble, setButtonIsAble] = useState(true);
  const setInputValue = (event) => {
    setLogInFormState({
      ...actualLogInFormState,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    if (
      actualLogInFormState.username !== "" &&
      actualLogInFormState.password !== ""
    ) {
      setButtonIsAble(false);
    } else {
      setButtonIsAble(true);
    }
  }, [actualLogInFormState]);

  const dispatch = useDispatch();

  const logInOnSubmit = async (event) => {
    event.preventDefault();
    await dispatch(loginThunk(actualLogInFormState));
    setLogInFormState(initialFormState);
    <Link to="/" />;
  };

  return (
    <LogInFormStyles>
      <form className="form" autoComplete="off" onSubmit={logInOnSubmit}>
        <div className="form__field">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            value={actualLogInFormState.username}
            onChange={setInputValue}
            type="text"
            id="username"
            className="form-control"
            aria-describedby="userName"
          />
        </div>
        <div className="form__field">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            value={actualLogInFormState.password}
            onChange={setInputValue}
            type="password"
            className="form-control"
            id="password"
          />
        </div>

        <button
          disabled={buttonIsAble}
          type="submit"
          className="btn btn-primary"
        >
          LOG IN
        </button>
      </form>
    </LogInFormStyles>
  );
};

export default LogInForm;
