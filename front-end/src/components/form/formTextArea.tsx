import type { ComponentProps } from 'react'
import type { Control, FieldPath, FieldValues } from 'react-hook-form'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { Textarea } from '../ui/textarea'

interface FormTextAreaProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends ComponentProps<'textarea'> {
    control: Control<TFieldValues>
    name: TName
    description?: string
    label?: string
    required?: boolean
}

export function FormTextArea<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    control,
    name,
    label,
    required,
    description,
    ...inputProps
}: FormTextAreaProps<TFieldValues, TName>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && (
                        <div className="flex items-center">
                            <FormLabel>{label}</FormLabel>
                            {required && (
                                <span className="text-destructive ml-1 leading-none">*</span>
                            )}
                        </div>
                    )}
                    <FormControl>
                        <Textarea
                            value={field.value || ''}
                            onChange={field.onChange}
                            {...inputProps}
                        />
                    </FormControl>

                    {description && <FormDescription>{description}</FormDescription>}

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
