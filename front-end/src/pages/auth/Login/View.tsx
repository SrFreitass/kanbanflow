

export function LoginView() {
    return (
        <div className="flex flex-col gap-6 justify-center items-center">
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

            <div className="flex flex-col gap-3">
                <input type="email" placeholder="E-mail" className="w-90 h-10 rounded-md outline-2 outline-gray-400 p-2" />
                <input type="password" placeholder="Senha" className="w-90 h-10 rounded-md outline-2 outline-gray-400 p-2" />
            </div>
            <div>
                <button className="text-white w-90">Entrar</button>
                <p className="text-start mt-2">Não tem uma conta?
                    <a href="../SignIn" className="ml-2">Criar uma conta</a>
                </p>
            </div>
        </div>
    )
}