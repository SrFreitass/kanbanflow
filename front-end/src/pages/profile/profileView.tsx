import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function ProfileView() {
    return (
        <div className="flex h-screen bg-gray-50">
            <main className="flex-1 p-6 overflow-auto">
                <h1 className="text-2xl font-bold mb-6">Perfil do Usuário</h1>

                <div className="bg-white rounded-lg shadow-sm border p-6 max-w-2xl">
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
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                                <input
                                    type="text"
                                    defaultValue="João Silva"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    disabled
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    defaultValue="joao@exemplo.com"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                                <input
                                    type="tel"
                                    defaultValue="(11) 98765-4321"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="border-t pt-6">
                            <h3 className="text-lg font-medium mb-4">Segurança</h3>
                            <div className="flex justify-center items-center gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Senha atual</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <Button className="" size="lg">
                                    Redefinir senha
                                </Button>
                            </div>
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
