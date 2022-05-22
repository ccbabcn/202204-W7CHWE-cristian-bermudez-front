import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../store/store";
import LogInForm from "./LoginForm";

describe("Given a LogInForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should two input fileds and a button", () => {
      render(
        <Provider store={{ ...store }}>
          <LogInForm />
        </Provider>
      );

      const fieldUserName = screen.getByLabelText("Username");
      const fieldPassword = screen.getByLabelText("Password");
      const button = screen.getByRole("button", { name: /log in/i });

      expect(fieldUserName).toBeInTheDocument();
      expect(fieldPassword).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the users types a name 'name' and a password 'password'", () => {
    test("Then the name input and the password inputs should equal those values and the login button should be enable", () => {
      const inputtedName = "name";
      const inputtePassword = "password";

      render(
        <Provider store={{ ...store }}>
          <LogInForm />
        </Provider>
      );
      const fieldUserName = screen.getByLabelText("Username");
      const fieldPassword = screen.getByLabelText("Password");
      const button = screen.getByRole("button", { name: /log in/i });

      userEvent.type(fieldUserName, inputtedName);
      userEvent.type(fieldPassword, inputtePassword);

      expect(fieldUserName).toHaveValue(inputtedName);
      expect(fieldPassword).toHaveValue(inputtePassword);
      expect(button).not.toBeDisabled();
    });
  });
});
