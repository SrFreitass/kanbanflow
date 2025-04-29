"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function TaskModal({ isOpen, onClose, task = null }) {
  const isNewTask = !task

  const initialFormData = {
    title: task?.title || "",
    description: task?.description || "",
    status: task?.status || "backlog",
    priority: task?.priority || "medium",
    assignee: task?.assignee || "",
    dueDate: task?.dueDate || "",
  }

  const [formData, setFormData] = useState(initialFormData)

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para salvar a tarefa
    console.log("Task data:", formData)
    onClose()
  }

  const handleDelete = () => {
    // Aqui você implementaria a lógica para excluir a tarefa
    console.log("Delete task:", task?.id)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{isNewTask ? "Nova Tarefa" : "Detalhes da Tarefa"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 flex-grow">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Título
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
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
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="backlog">Backlog</option>
                    <option value="in_progress">Em Progresso</option>
                    <option value="review">Em Revisão</option>
                    <option value="done">Concluído</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                    Prioridade
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="low">Baixa</option>
                    <option value="medium">Média</option>
                    <option value="high">Alta</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="assignee" className="block text-sm font-medium text-gray-700 mb-1">
                    Responsável
                  </label>
                  <select
                    id="assignee"
                    name="assignee"
                    value={formData.assignee}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecionar responsável</option>
                    <option value="1">Ana Silva</option>
                    <option value="2">Carlos Oliveira</option>
                    <option value="3">Mariana Costa</option>
                    <option value="4">Pedro Santos</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Data de Entrega
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {!isNewTask && (
                <div className="border-t pt-4 mt-4">
                  <h3 className="text-lg font-medium mb-3">Comentários</h3>
                  <div className="space-y-3 mb-4">
                    {[
                      {
                        user: "Ana Silva",
                        avatar: "/placeholder.svg?height=32&width=32",
                        comment: "Precisamos revisar o design antes de implementar.",
                        date: "22/04/2023 14:30",
                      },
                      {
                        user: "Carlos Oliveira",
                        avatar: "/placeholder.svg?height=32&width=32",
                        comment: "Concordo. Vou agendar uma reunião com a equipe de design.",
                        date: "22/04/2023 15:45",
                      },
                    ].map((comment, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                          {comment.user.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{comment.user}</span>
                            <span className="text-xs text-gray-500">{comment.date}</span>
                          </div>
                          <p className="text-sm mt-1">{comment.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                      JS
                    </div>
                    <input
                      type="text"
                      placeholder="Adicionar um comentário..."
                      className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="button" className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Enviar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="p-4 border-t flex justify-between">
          {!isNewTask && (
            <button
              type="button"
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Excluir
            </button>
          )}
          <div className="flex gap-2 ml-auto">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded-md hover:bg-gray-50">
              Cancelar
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {isNewTask ? "Criar" : "Salvar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
