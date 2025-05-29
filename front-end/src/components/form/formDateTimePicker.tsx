import type { Control, FieldPath, FieldValues } from 'react-hook-form'
import { DateTimePicker } from '../dateTimePicker/dateTimePicker'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'

interface FormDateTimePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  control: Control<TFieldValues>
  name: TName
  description?: string
  label: string
  required?: boolean
  className?: string
}

export function FormDateTimePicker<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  required,
  description,
}: FormDateTimePickerProps<TFieldValues, TName>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center">
            <FormLabel>{label}</FormLabel>
            {required && (
              <span className="text-destructive ml-1 leading-none">*</span>
            )}
          </div>
          <FormControl>
            <DateTimePicker
              defaultValue={field.value}
              onSelectedValue={field.onChange}
            />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
