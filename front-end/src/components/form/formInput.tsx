import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import { Input, type InputProps } from '../ui/input'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

interface FormInputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends InputProps {
    control: Control<TFieldValues>
    name: TName
    description?: string
    label?: string
    required?: boolean
}

export function FormInput<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    control,
    name,
    label,
    required,
    description,
    ...inputProps
}: FormInputProps<TFieldValues, TName>) {
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
                        <Input
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
