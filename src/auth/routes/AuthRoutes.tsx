import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { NotFound } from "../pages/NotFound"


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}
