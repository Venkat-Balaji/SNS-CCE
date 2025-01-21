import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";

// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProfile from "./pages/admin/AdminProfile";

// User Pages
import UserDashboard from "./pages/user/UserDashboard";
import SavedJobs from "./pages/user/SavedJobs";
import JobDetails from "./pages/user/JobDetails";
import UserProfile from "./pages/user/UserProfile";
import StudyMaterial from "./pages/user/StudyMaterial";
import MNCMaterials from "./pages/user/study-materials/MNCMaterials";
import StateMaterials from "./pages/user/study-materials/StateMaterials";
import CentralMaterials from "./pages/user/study-materials/CentralMaterials";
import OtherMaterials from "./pages/user/study-materials/OtherMaterials";
import StudyMaterialsSelection from "./pages/user/study-materials/StudyMaterialsSelection";
import JobMaterials from "./pages/user/study-materials/JobMaterials";
import ExamMaterials from "./pages/user/study-materials/ExamMaterials";
import MaterialDetails from "./pages/user/study-materials/MaterialDetails";

// Components
import ProtectedRoute from "./components/common/ProtectedRoute";
import ErrorBoundary from "./components/common/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
          <Container maxWidth={false} disableGutters>
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* Admin Routes */}
              <Route
                path="/admin-home"
                element={
                  <ProtectedRoute userType="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/profile"
                element={
                  <ProtectedRoute userType="admin">
                    <AdminProfile />
                  </ProtectedRoute>
                }
              />

              {/* User Routes */}
              <Route
                path="/"
                element={
                  <ProtectedRoute userType="user">
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/saved-jobs"
                element={
                  <ProtectedRoute userType="user">
                    <SavedJobs />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/jobs/:id"
                element={
                  <ProtectedRoute userType="user">
                    <JobDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/user/profile"
                element={
                  <ProtectedRoute userType="user">
                    <UserProfile />
                  </ProtectedRoute>
                }
              />

              {/* Study Material Routes */}
              <Route
                path="/study-materials"
                element={<StudyMaterialsSelection />}
              />
              <Route path="/user/job-materials" element={<JobMaterials />} />
              <Route
                path="/user/job-materials/mnc"
                element={<MNCMaterials />}
              />
              <Route
                path="/user/job-materials/state"
                element={<StateMaterials />}
              />
              <Route
                path="/user/job-materials/central"
                element={<CentralMaterials />}
              />
              <Route
                path="/user/job-materials/others"
                element={<OtherMaterials />}
              />
              <Route path="/user/exam-materials" element={<ExamMaterials />} />
              <Route
                path="/study-materials/:id"
                element={<MaterialDetails />}
              />
              <Route path="/study-materials/exam" element={<ExamMaterials />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
