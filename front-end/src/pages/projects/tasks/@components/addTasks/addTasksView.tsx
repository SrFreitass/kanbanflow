"use client"

import { FormInput } from '@/components/form/formInput'
import {
    Modal,
    ModalButtons,
    ModalContent,
    ModalTitle,
} from '@/components/modal/modal'
import { Form } from '@/components/ui/form'
import { AddTasksModel } from './addTasksModel'
import { FormTextArea } from '@/components/form/formTextArea'
import { FormDateTimePicker } from '@/components/form/formDateTimePicker'
// import { FormSelect } from '@/components/form/formSelect'

export function AddTasksView({
    form,
    handleConfirmationData,
    toggle,
    open,
}: ReturnType<typeof AddTasksModel>) {
    return (
        <Modal
            triggerClassName="h-[45px] w-[180px]"
            label="Nova Tarefa"
            description="Nova Tarefa"
            open={open}
            onOpenChange={toggle}
            icon
        >
            <ModalContent className="flex flex-col gap-5 mb-4 w-full">
                <ModalTitle>Nova Tarefa</ModalTitle>
                <Form {...form}>
                    <form
                        className="mt-2 lg:mt-4"
                        onSubmit={form.handleSubmit(handleConfirmationData)}
                    >
                        <div className="flex flex-col gap-5 mb-4 lg:mb-8">
                            <FormInput
                                control={form.control}
                                name="title"
                                label="Título"
                                required
                            />
                            <FormTextArea
                                control={form.control}
                                name="description"
                                label="Descrição"
                            />
                            <div className='flex gap-2'>
                                <FormInput
                                    control={form.control}
                                    name="status"
                                    label="Status"
                                />
                                <FormInput
                                    control={form.control}
                                    name="priority"
                                    label="Prioridade"
                                />
                            </div>
                            <div className='flex gap-2'>
                                <FormInput
                                    control={form.control}
                                    name="assignee"
                                    label="Responsável"
                                />
                                <FormDateTimePicker
                                    control={form.control}
                                    name="dueDate"
                                    label="Data de Entrega"
                                />
                            </div>
                        </div>
                        <ModalButtons type="submit">Criar</ModalButtons>
                    </form>
                </Form>
            </ModalContent>
        </Modal>
    )
}
