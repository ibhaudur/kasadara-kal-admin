import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoadingSpinner from "../component/LoadingSpinner";
import Layout from "../layout";
import AddExam from "../pages/exams/pages/addExam";
import ViewExam from "../pages/exams/pages/viewExam";

const Login = lazy(() => import("../pages/auth/login"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const Exams = lazy(() => import("../pages/exams"));
const Payments = lazy(() => import("../pages/payments"));
const Candidates = lazy(() => import("../pages/candidates"));
const Reports = lazy(() => import("../pages/reports"));

const AllRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="exams" element={<Exams />} />
            <Route path="exams/addExam" element={<AddExam />} />
            <Route path="exams/view/:id" element={<ViewExam />} />
            <Route path="exams/edit/:id" element={<AddExam />} />
            <Route path="payments" element={<Payments />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="report" element={<Reports />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
