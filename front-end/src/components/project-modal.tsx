"use client"

import { useState } from "react"
import { Icons } from "./icons"

export function ProjectModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        category: "",
        members: [],
    })

    const [selectedMembers, setSelectedMembers] = useState([])

    if (!isOpen) return null

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleMemberToggle = (memberId) => {
        setSelectedMembers((prev) => (prev.includes(memberId) ? prev.filter((id) => id !== memberId) : [...prev, memberId]))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const projectData = {
            ...formData,
            members: selectedMembers,
        }
        console.log("Project data:", projectData)
        onClose()
    }

    const availableMembers = [
        { id: 1, name: "Ana Silva", role: "Designer", avatar: "/placeholder.svg?height=32&width=32" },
        { id: 2, name: "Carlos Oliveira", role: "Desenvolvedor", avatar: "/placeholder.svg?height=32&width=32" },
        { id: 3, name: "Mariana Costa", role: "Product Manager", avatar: "/placeholder.svg?height=32&width=32" },
        { id: 4, name: "Pedro Santos", role: "Desenvolvedor", avatar: "/placeholder.svg?height=32&width=32" },
        { id: 5, name: "Juliana Mendes", role: "QA", avatar: "/placeholder.svg?height=32&width=32" },
    ]

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold">Novo Projeto</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <Icons.x className="h-5 w-5" />
                    </button>
                </div>

                <div className="overflow-y-auto p-4 flex-grow">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nome do Projeto
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                    Descrição
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                                        Data de Início
                                    </label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                                        Data de Término
                                    </label>
                                    <input
                                        type="date"
                                        id="endDate"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                        Categoria
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Selecionar categoria</option>
                                        <option value="development">Desenvolvimento</option>
                                        <option value="design">Design</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="research">Pesquisa</option>
                                        <option value="other">Outro</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Membros da Equipe</label>
                                <div className="border rounded-md max-h-60 overflow-y-auto">
                                    {availableMembers.map((member) => (
                                        <div
                                            key={member.id}
                                            className="flex items-center justify-between p-3 hover:bg-gray-50 border-b last:border-b-0"
                                        >
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium mr-3">
                                                    {member.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-medium">{member.name}</p>
                                                    <p className="text-sm text-gray-500">{member.role}</p>
                                                </div>
                                            </div>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedMembers.includes(member.id)}
                                                    onChange={() => handleMemberToggle(member.id)}
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                />
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="p-4 border-t flex justify-end gap-2">
                    <button type="button" onClick={onClose} className="px-4 py-2 border rounded-md hover:bg-gray-50">
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Criar Projeto
                    </button>
                </div>
            </div>
        </div>
    )
}
