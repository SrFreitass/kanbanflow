import { useToggle } from '@/hooks/useToggle'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { projectFormSchema, ProjectFormValues } from '../projectsSchema'

export function ProjectModalModel() {

  const [open, toggle] = useToggle(false)


  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: '',
      description: '',
      startDate: new Date(),
      dueDate: new Date(),
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
