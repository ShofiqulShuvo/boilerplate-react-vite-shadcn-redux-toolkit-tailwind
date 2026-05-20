import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardPage } from "@/features/dashboard/pages/DashboardPage"
import { LoginPage } from "@/features/auth/pages/LoginPage"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
