import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth";
import RouteGuard from "./components/route-guard";
import { AuthContext } from "./context/auth-context";
import InstructorHomepage from "./pages/instructor";
import StudentHomePage from "./pages/student";
import StudentViewCommonLayout from "./components/student-view/common-layout";
import NotFoundPage from "./pages/not-found";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <Routes>
      {/* auth */}
      <Route
        path="/auth"
        element={
          <RouteGuard
            element={<AuthPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      {/* instructor */}
      <Route
        path="/instructor"
        element={
          <RouteGuard
            element={<InstructorHomepage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      {/* student */}
      <Route
        path="/"
        element={
          <RouteGuard
            element={<StudentViewCommonLayout />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      >
        <Route path="" element={<StudentHomePage />} />
        <Route path="home" element={<StudentHomePage />} />
      </Route>

      {/* Not found page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
