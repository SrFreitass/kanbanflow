import type { Control, FieldPath, FieldValues } from 'react-hook-form'
import { DatePicker, type DatePickerProps } from '../datePicker/datePicker'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'

interface FormDatePickerProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<DatePickerProps, 'onSelectedValue'> {
    control: Control<TFieldValues>
    name: TName
    description?: string
    label: string
    required?: boolean
    className?: string
}

export function FormDatePicker<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    control,
    name,
    label,
    required,
    description,
    className,
    ...datePickerProps
}: FormDatePickerProps<TFieldValues, TName>) {
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
                        <DatePicker
                            className={className}
                            onSelectedValue={field.onChange}
                            defaultValue={field.value}
                            {...datePickerProps}

                        />
                    </FormControl>

                    {description && <FormDescription>{description}</FormDescription>}

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
