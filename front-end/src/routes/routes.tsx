import { BrowserRouter, Routes, Route } from "react-router"
import { Login } from '@/pages/auth/login'
import { SignUp } from '@/pages/auth/signUp'
import { Home } from '@/pages/home'
import { Profile } from '@/pages/profile'
import { UserTasks } from '@/pages/user-tasks'
import { Tasks } from '@/pages/projects/[id]/tasks'
import { Members } from '@/pages/projects/[id]/members'
import { Dashboard } from '@/pages/projects/[id]/dashboard'
import { Projects } from "@/pages/projects"
import { ProjectSidebar } from "@/components/projectSidebar"
import { HomeLayout } from "@/components/layouts/homeLayout"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route element={<HomeLayout />}>
          <Route path='/inicio' element={<Home />} />
          <Route path='/perfil' element={<Profile />} />
          <Route path='/minhas_atividades' element={<UserTasks />} />
          <Route path='/projetos' element={<Projects />} />
        </Route>
        <Route element={<ProjectSidebar />}>
          <Route path="/atividades/:id" element={<Tasks />} />
          <Route path="/membros" element={<Members />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
