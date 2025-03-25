import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function SignUpView(){
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col w-96 gap-3">
                <div className="flex gap-3 justify-center">
                    <img src="/src/assets/logo.svg" alt="logo" className="w-12 h-12" />
                    <h1 className="font-bold ">
                        <span className="dark:text-white">Kanban</span>
                        <span className="text-[#F15637]">Flow</span>
                    </h1>
                </div>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dictum mauris.</p>
            </div>

            <div className="flex flex-col gap-5">
                <Input label="Nome" placeholder="Digite seu nome completo"/>
                <Input label="Email" placeholder="Digite seu e-mail" type="email"/>
                <Input label="Senha" placeholder="Digite sua senha" type="password"/>
            </div>
            <div>
                <Button size="lg" className="w-full">Confirmar</Button>
                <p className="text-start mt-2">Já tem uma conta?
                    <Link to="/entrar" className="ml-2">Entrar</Link>
                </p>
            </div>
        </div>
    )
}