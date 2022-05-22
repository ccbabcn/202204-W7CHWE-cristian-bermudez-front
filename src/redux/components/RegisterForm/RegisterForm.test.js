import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 4 form fields and a button", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const fieldUserName = screen.getByLabelText("Name");
      const fieldUsername = screen.getByLabelText("Username");
      const fieldPassword = screen.getByLabelText("Password");
      const fieldImage = screen.getByLabelText("Image");

      const button = screen.getByRole("button", { name: /register/i });

      expect(fieldUserName).toBeInTheDocument();
      expect(fieldUsername).toBeInTheDocument();
      expect(fieldPassword).toBeInTheDocument();
      expect(fieldImage).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the users types a username 'username', a name 'name' and a password 'password'", () => {
    test("Then the name input and the password inputs should equal those values and the login button should be enable", () => {
      const inputtedName = "name";
      const inputtedUserName = "username";
      const inputtePassword = "password";

      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const fieldName = screen.getByLabelText("Name");
      const fieldUserName = screen.getByLabelText("Username");
      const fieldPassword = screen.getByLabelText("Password");
      const button = screen.getByRole("button", { name: /register/i });

      userEvent.type(fieldName, inputtedName);
      userEvent.type(fieldUserName, inputtedUserName);
      userEvent.type(fieldPassword, inputtePassword);

      expect(fieldName).toHaveValue(inputtedName);
      expect(fieldUserName).toHaveValue(inputtedUserName);
      expect(fieldPassword).toHaveValue(inputtePassword);
      expect(button).not.toBeDisabled();
    });
  });
});
