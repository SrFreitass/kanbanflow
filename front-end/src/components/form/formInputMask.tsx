import type { Control, FieldPath, FieldValues } from 'react-hook-form'
import { InputMask, type MaskProps } from '../inputMask/inputMask'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import type { InputProps } from '../ui/input'

interface FormInputMaskProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<InputProps, 'defaultValue'> {
    control: Control<TFieldValues>
    name: TName
    description?: string
    label: string
    required?: boolean
    mask: MaskProps
}

export function FormInputMask<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    control,
    name,
    label,
    required,
    description,
    mask,
    ...inputProps
}: FormInputMaskProps<TFieldValues, TName>) {
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
                        <InputMask
                            mask={mask}
                            onValueChange={field.onChange}
                            defaultValue={field.value}
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
