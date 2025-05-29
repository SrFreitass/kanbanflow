import {
  Modal,
  ModalButtons,
  ModalContent,
  ModalTitle,
} from '@/components/modal/modal'

import { FormInput } from '@/components/form/formInput'
import { Form } from '@/components/ui/form'
import { useEditMembersModel } from './editMembersModel'

interface EditMembersViewProps extends ReturnType<typeof useEditMembersModel> {
  open: boolean
  toggle: VoidFunction
}

export function EditMembersView({
  open,
  toggle,
  form,
  handleConfirmationData,
}: EditMembersViewProps) {
  return (
    <Modal description="Editar Usuário" open={open} onOpenChange={toggle}>
      <ModalTitle variant="primary">Editar Usuário</ModalTitle>
      <ModalContent>
        <Form {...form}>
          <form
            className="space-y-7"
            onSubmit={form.handleSubmit(handleConfirmationData)}
          >
            <FormInput
              control={form.control}
              id="name"
              name="name"
              placeholder="Digite o nome"
              type="text"
              label="Nome"
              required
            />
            <FormInput
              id="email"
              name="email"
              control={form.control}
              placeholder="Digite seu e-mail"
              type="email"
              label="E-mail"
              required
            />
            <FormInput
              control={form.control}
              name="role"
              label="Cargo"
              required
            />
            <FormInput
              control={form.control}
              name="status"
              label="Status"
              required
            />

            <ModalButtons type="submit">
              Salvar
            </ModalButtons>
          </form>
        </Form>
      </ModalContent>
    </Modal>
  )
}
