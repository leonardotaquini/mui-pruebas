import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { NotFound } from "../pages/NotFound"
import { SignUpPage } from "../pages/SignUpPage"


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/signup" element={ <SignUpPage/> } />
        <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}
