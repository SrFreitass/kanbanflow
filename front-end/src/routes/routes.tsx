import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/auth/login'
import { SignUp } from '../pages/auth/signUp'
import { Home } from '@/pages/home'
import { HomeSidebar } from '@/components/layouts/homeSidebar'
import { Profile } from '@/pages/profile'
import { Activities } from '@/pages/activities'
import { Tasks } from '@/pages/projects/[id]/tasks'
import { Members } from '@/pages/projects/[id]/members'
import { Dashboard } from '@/pages/projects/[id]/dashboard'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route element={<HomeSidebar />}>
          <Route path='/inicio' element={<Home />} />
          <Route path='/perfil' element={<Profile />} />
          <Route path='/atividades' element={<Activities />} />
        </Route>
        <Route>
          <Route path="/atividades/:id" element={<Tasks />} />
          <Route path="/membros" element={<Members />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
