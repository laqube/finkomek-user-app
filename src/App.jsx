import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPageExpert from "./pages/LoginPageExpert/LoginPageExpert";
import UserPage from "./pages/UserPage/UserPage";
import ExpertPage from "./pages/ExpertPage/ExpertPage";
import CoursesCatalogue from "./pages/CoursesCatalogue/CoursesCatalogue";
import ExpertsCatalogue from "./pages/ExpertsCatalogue/ExpertsCatalogue";
import UserSettings from "./pages/UserSettings/UserSettings";
import CalculatorsCatalogue from "./pages/CalculatorsCatalogue/CalculatorsCatalogue";
import CalculatorNet from "./pages/CalculatorNet/CalculatorNet";
import CalculatorDebt from "./pages/CalculatorDebt/CalculatorDebt";
import CalculatorGoal from "./pages/CalculatorGoal/CalculatorGoal";
import CalculatorRetirement from "./pages/CalculatorRetirement/CalculatorRetirement";
import { useSelector } from "react-redux";
import CoursePage from "./pages/CoursePage/CoursePage";

const App = () => {
  const { role } = useSelector((state) => state.user);
  console.log(role);
  return (
    <Routes>
      {role === null && (
        <>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login-expert" element={<LoginPageExpert />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </>
      )}

      {role === "student" && (
        <>
          <Route path="/user" element={<UserPage />} />
          <Route path="/courses" element={<CoursesCatalogue />} />
          <Route path="/experts" element={<ExpertsCatalogue />} />
          <Route path="/calculators" element={<CalculatorsCatalogue />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="*" element={<Navigate to={"/user"} replace />} />
        </>
      )}

      {role === "expert" && (
        <>
          <Route path="/expert" element={<ExpertPage />} />
          <Route path="*" element={<Navigate to={"/expert"} replace />} />
        </>
      )}
    </Routes>
  );
};

export default App;
