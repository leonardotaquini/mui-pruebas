import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { NotFound } from "../auth/pages/NotFound"

export const RouterApp = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={ <NotFound /> } />
        </Routes>
    </>
  )
}
