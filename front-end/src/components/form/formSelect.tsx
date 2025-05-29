import { cn } from '@/lib/utils'
import type { Control, FieldPath, FieldValues } from 'react-hook-form'
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Select } from '../ui/select'

interface FormSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  control: Control<TFieldValues>
  name: TName
  label: string
  required?: boolean
  description?: string
  className?: string
}

export function FormSelect<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  description,
  required,
  className,
  ...selectProps
}: FormSelect< TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('w-full', className)}>
          <div className="flex items-center">
            <FormLabel>{label}</FormLabel>
            {required && (
              <span className="text-destructive ml-1 leading-none">*</span>
            )}
          </div>

          <Select
            {...selectProps}
            value={field.value}
            onValueChange={field.onChange}
          />

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
