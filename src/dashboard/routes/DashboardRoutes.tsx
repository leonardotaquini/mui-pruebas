import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage"
import { NotFound } from "../../ui/pages/NotFound"
import { MetricsPage } from "../pages/MetricsPage"

export const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/metrics" element={<MetricsPage />} />
        <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}
