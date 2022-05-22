import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../thunks/userThunk/userThunk";
import { LogInFormStyles } from "../LogInForm/LogInFormStyles";

const RegisterForm = () => {
  let navigate = useNavigate();

  const initialFormState = {
    name: "",
    username: "",
    password: "",
    image: "",
  };

  const [actualRegisterFormState, setRegisterFormState] =
    useState(initialFormState);
  const [buttonIsAble, setButtonIsAble] = useState(true);
  const setInputValue = (event) => {
    setRegisterFormState({
      ...actualRegisterFormState,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  useEffect(() => {
    if (
      actualRegisterFormState.username !== "" &&
      actualRegisterFormState.password !== "" &&
      actualRegisterFormState.name !== ""
    ) {
      setButtonIsAble(false);
    } else {
      setButtonIsAble(true);
    }
  }, [actualRegisterFormState]);

  const dispatch = useDispatch();

  const logInOnSubmit = async (event) => {
    event.preventDefault();
    await dispatch(loginThunk(actualRegisterFormState));
    setRegisterFormState(initialFormState);
  };

  const toLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <LogInFormStyles>
      <form className="form" autoComplete="off" onSubmit={logInOnSubmit}>
        <div className="form__field">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={actualRegisterFormState.name}
            onChange={setInputValue}
            type="text"
            id="name"
            className="form-control"
          />
        </div>
        <div className="form__field">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            value={actualRegisterFormState.username}
            onChange={setInputValue}
            type="text"
            id="username"
            className="form-control"
          />
        </div>
        <div className="form__field">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            value={actualRegisterFormState.password}
            onChange={setInputValue}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <div className="form__field">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            value={actualRegisterFormState.image}
            accept="image/png, image/jpg"
            onChange={setInputValue}
            type="file"
            className="form-control"
            id="image"
          />
        </div>

        <button
          disabled={buttonIsAble}
          type="submit"
          className="btn btn-primary"
        >
          REGISTER
        </button>
      </form>
      <button onClick={toLogin} className="btn btn-primary">
        LOGIN
      </button>
    </LogInFormStyles>
  );
};

export default RegisterForm;
