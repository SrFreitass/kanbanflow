"use client"

import { FormInput } from '@/components/form/formInput'
import {
  Modal,
  ModalButtons,
  ModalContent,
  ModalTitle,
} from '@/components/modal/modal'
import { Form } from '@/components/ui/form'
import { AddMembersModel } from './addMembersModel'
// import { FormSelect } from '@/components/form/formSelect'

export function AddMembersView({
  form,
  handleConfirmationData,
  toggle,
  open,
}: ReturnType<typeof AddMembersModel>) {
  return (
    <Modal
      triggerClassName="h-[45px] w-[180px]"
      label="Novo Membro"
      description="Novo Membro"
      open={open}
      onOpenChange={toggle}
      icon
    >
      <ModalContent className="flex flex-col gap-5 mb-4 w-full">
        <ModalTitle>Novo Membro</ModalTitle>
        <Form {...form}>
          <form
            className="mt-2 lg:mt-4"
            onSubmit={form.handleSubmit(handleConfirmationData)}
          >
            <div className="flex flex-col gap-5 mb-4 lg:mb-8">
              <FormInput
                control={form.control}
                name="name"
                label="Nome"
                required
              />
              <FormInput
                name="role"
                control={form.control}
                label="Cargo"
                required
              />
              <FormInput
                name="status"
                control={form.control}
                label="Status"
                required
              />
            </div>
            <ModalButtons type="submit">Salvar</ModalButtons>
          </form>
        </Form>
      </ModalContent>
    </Modal>
  )
}
