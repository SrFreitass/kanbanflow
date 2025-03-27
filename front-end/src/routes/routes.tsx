import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import { Login } from '../pages/auth/Login'
import { SignUp } from '../pages/auth/SignUp'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/entrar" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
