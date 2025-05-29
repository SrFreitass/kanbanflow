import { Heading } from "@/components/heading/heading"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ProfileView() {
    return (
        <div className="flex h-screen p-6 bg-gray-50">
            <main>
                <Heading size="lg">Perfil do Usuário</Heading>
                <div className="bg-white rounded-lg shadow-sm border p-6 max-w-2xl mt-10">
                    <div className="flex items-center gap-4 mb-6">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <Button size="lg">
                                Adicionar foto
                            </Button>
                            <Button variant="outline_destructive" className="ml-2" size="lg">
                                Remover foto
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex flex-col gap-6">
                            <Input label="Nome" type="text" placeholder="João Augusto" disabled />
                            <Input label="Email" type="email" placeholder="joao.agt6@gmail.com" disabled />
                            <Input label="Telefone" type="tel" placeholder="(11) 98765-4321" disabled />
                        </div>

                        <div className="flex items-center gap-4">
                            <Input label="Senha" type="password" placeholder="**********" disabled />
                            <Button size="lg">
                                Redefinir senha
                            </Button>
                        </div>

                        <div className="flex justify-end gap-3">
                            <Button variant="outline_destructive" size="lg">Cancelar</Button>
                            <Button size="lg">
                                Salvar alterações
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
