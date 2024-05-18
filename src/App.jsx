import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPageExpert from "./pages/LoginPageExpert/LoginPageExpert";
import UserPage from "./pages/UserPage/UserPage";
import ExpertPage from "./pages/ExpertPage/ExpertPage";
import CoursesCatalogue from "./pages/CoursesCatalogue/CoursesCatalogue";
import ExpertsCatalogue from "./pages/ExpertsCatalogue/ExpertsCatalogue";
import UserSettings from "./pages/UserSettings/UserSettings";
import PrivateRoute from "./PrivateRoute";
import CalculatorsCatalogue from "./pages/CalculatorsCatalogue/CalculatorsCatalogue";
import CalculatorNet from "./pages/CalculatorNet/CalculatorNet";
import CalculatorDebt from "./pages/CalculatorDebt/CalculatorDebt";
import CalculatorGoal from "./pages/CalculatorGoal/CalculatorGoal";
import CalculatorRetirement from "./pages/CalculatorRetirement/CalculatorRetirement";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login-expert" element={<LoginPageExpert />} />
      <Route path="/user" element={<UserPage />} allowedRoles={["student"]} />
      <Route
        path="/expert"
        element={<ExpertPage />}
        allowedRoles={["expert"]}
      />
      <Route
        path="/courses"
        element={<CoursesCatalogue />}
        allowedRoles={["student"]}
      />
      <Route
        path="/experts"
        element={<ExpertsCatalogue />}
        allowedRoles={["student"]}
      />
      <Route
        path="/calculators"
        element={<CalculatorsCatalogue />}
        allowedRoles={["student"]}
      />
      <Route
        path="/settings"
        element={<UserSettings />}
        allowedRoles={["student"]}
      />
    </Routes>
  );
};

export default App;
