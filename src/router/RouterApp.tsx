import { Route, Routes } from "react-router-dom"
import { NotFound } from "../auth/pages/NotFound"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"

export const RouterApp = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <h1>Pagina principal</h1> }  />
            <Route path="/dashboard/*" element={ <DashboardRoutes/> }  />
            <Route path="/auth/*" element={ <AuthRoutes /> } />
            <Route path="*" element={ <NotFound /> } />
        </Routes>
    </>
  )
}
