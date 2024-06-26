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
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import CourseCheckout from "./pages/CourseChekcout/CourseCheckout";
import CourseInfoPage from "./pages/CourseInfoPage/CourseInfoPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import ExpertDashboard from "./pages/ExpertDashboard/ExpertDashboard";
import MeetingRoom from "./pages/MeetingRoom/MeetingRoom";

const App = () => {
  const { role } = useSelector((state) => state.user);
  console.log(role);
  return (
    <Routes>
      {role === null && (
        <>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/expert/login" element={<LoginPageExpert />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </>
      )}

      {role === "student" && (
        <>
          <Route path="/user" element={<UserPage />} />
          <Route path="/courses" element={<CoursesCatalogue />} />
          <Route path="/experts" element={<ExpertsCatalogue />} />
          <Route path="/expert/:expertId" element={<ExpertPage />} />
          <Route path="/expert/checkout/meetId" element={<CheckoutPage />} />
          <Route path="/calculators" element={<CalculatorsCatalogue />} />
          <Route path="/course/:courseId" element={<CourseInfoPage />} />
          <Route path="/learn/:courseId" element={<CoursePage />} />
          <Route path="/learn/:courseId/:lessonName" element={<CoursePage />} />
          <Route
            path="/course/checkout/:courseId"
            element={<CourseCheckout />}
          />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/meeting/:roomId/:role" element={<MeetingRoom />} />
          <Route path="*" element={<Navigate to={"/user"} replace />} />
        </>
      )}

      {role === "expert" && (
        <>
          <Route path="/expert/dashboard" element={<ExpertDashboard />} />
          <Route path="/meeting/:roomId/:role" element={<MeetingRoom />} />
          <Route
            path="*"
            element={<Navigate to={"/expert/dashboard"} replace />}
          />
        </>
      )}
    </Routes>
  );
};

export default App;
