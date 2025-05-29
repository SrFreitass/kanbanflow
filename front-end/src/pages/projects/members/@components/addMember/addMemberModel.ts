import { useToggle } from '@/hooks/useToggle'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { MembersFormSchema, MembersFormValues } from '../../membersSchema'

export function AddMemberModel() {
  const [open, toggle] = useToggle(false)

  const form = useForm<MembersFormValues>({
    resolver: zodResolver(MembersFormSchema),
    defaultValues: {
      name: '',
      role: '',
      status: '',
    },
  })

  function handleConfirmationData() {
  }

  return {
    open,
    toggle,
    handleConfirmationData,
    form,
  }
}
