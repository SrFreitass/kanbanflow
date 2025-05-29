// import { toast } from '@/hooks'
// import { queryClient } from '@/lib/reactQuery'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { MembersFormSchema, MembersFormValues } from '../../membersSchema'

export function useEditMembersModel() {
  const form = useForm<MembersFormValues>({
    resolver: zodResolver(MembersFormSchema),
    defaultValues: {
      name: '',
      email: '',
      role: '',
      status: '',
    },
  })

  function handleConfirmationData() {
  }

  
  return {
    handleConfirmationData,
    form,
  }
}
