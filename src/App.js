import { Navigate, Route, Routes } from "react-router";
import LogInForm from "./redux/components/LogInForm/LogInForm";
import RegisterForm from "./redux/components/RegisterForm/RegisterForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
