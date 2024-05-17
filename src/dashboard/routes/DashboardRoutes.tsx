import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage"
import { NotFound } from "../../auth/pages/NotFound"

export const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}
