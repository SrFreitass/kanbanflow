import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Icons } from "@/components/icons"

export function ProfilePage() {
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
                            <h2 className="text-xl font-semibold">João Silva</h2>
                            <p className="text-gray-500">Desenvolvedor</p>
                            <button className="text-blue-600 text-sm mt-1 hover:underline">Alterar foto</button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                                <input
                                    type="text"
                                    defaultValue="João Silva"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                                <input
                                    type="text"
                                    defaultValue="Desenvolvedor"
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Senha atual</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nova senha</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="border-t pt-6">
                            <h3 className="text-lg font-medium mb-4">Preferências</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Icons.moon className="h-5 w-5 text-gray-700" />
                                        <span className="text-sm font-medium">Tema Escuro</span>
                                    </div>
                                    <Switch id="theme-mode" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Icons.bell className="h-5 w-5 text-gray-700" />
                                        <span className="text-sm font-medium">Notificações por email</span>
                                    </div>
                                    <Switch id="email-notifications" defaultChecked />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Icons.bell className="h-5 w-5 text-gray-700" />
                                        <span className="text-sm font-medium">Notificações no navegador</span>
                                    </div>
                                    <Switch id="browser-notifications" defaultChecked />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3">
                            <button className="px-4 py-2 border rounded-md hover:bg-gray-50">Cancelar</button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Salvar alterações
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
