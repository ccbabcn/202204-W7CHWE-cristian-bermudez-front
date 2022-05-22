import { Navigate, Route, Routes } from "react-router";
import LogInForm from "./redux/components/LogInForm/LogInForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogInForm />} />
      </Routes>
    </div>
  );
}

export default App;
