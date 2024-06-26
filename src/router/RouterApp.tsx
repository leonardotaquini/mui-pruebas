import { Route, Routes } from "react-router-dom"
import { NotFound } from "../ui/pages/NotFound"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"

export const RouterApp = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <h1 style={{display:'grid', placeItems:'center'}}>Pagina principal</h1> }  />
            <Route path="/dashboard/*" element={ <DashboardRoutes/> }  />
            <Route path="/auth/*" element={ <AuthRoutes /> } />
            <Route path="*" element={ <NotFound /> } />
        </Routes>
    </>
  )
}
