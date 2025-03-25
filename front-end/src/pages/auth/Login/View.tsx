import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function LoginView() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col w-90 gap-2">
                <div className="flex gap-3">
                    <img src="/src/assets/logo.svg" alt="logo" className="w-16 h-16" />
                    <h1 className="font-bold">
                        <span className="dark:text-white">Kanban</span>
                        <span className="text-[#F15637]">Flow</span>
                    </h1>
                </div>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dictum mauris.</p>
            </div>

            <div className="flex flex-col gap-5">
                <Input label="Email" placeholder="Digite seu e-mail"/>
                <Input label="Senha" placeholder="Digite sua senha"/>
            </div>
            <div>
                <Button size="lg" className="w-full"> <Link to="/board" >Entrar</Link>  </Button>
                <p className="text-start mt-2">Não tem uma conta?
                    <Link to="/cadastro" className="ml-2">Criar uma conta</Link>
                </p>
            </div>
        </div>
    )
}