import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import { useSignUpModel } from "./signUpModel";

export function SignUpView() {
    const { form, isLoading, onSubmit } = useSignUpModel()

    const { register, handleSubmit, setValue } = form

    return (
        <div className="flex w-screen justify-center items-center">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col w-96 gap-3">
                    <div className="flex gap-3 justify-center">
                        <img src="/logo.svg" alt="logo" className="w-12 h-12" />
                        <h1 className="font-bold ">
                            <span className="dark:text-white">Kanban</span>
                            <span className="text-[#F15637]">Flow</span>
                        </h1>
                    </div>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dictum mauris.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5">
                        <Input label="Nome" placeholder="Digite seu nome completo" {...register('name')} />
                        <Input label="Email" placeholder="Digite seu e-mail" type="email" {...register('email')} />
                        <Input label="Senha" placeholder="Digite sua senha" type="password" {...register('password')} />
                        <Button size="lg" className="w-full" type="submit">Confirmar</Button>
                    </div>
                </form>

                <p className="text-start">Já tem uma conta?
                    <Link to="/" className="ml-2">Entrar</Link>
                </p>
            </div>
        </div>

    )
}