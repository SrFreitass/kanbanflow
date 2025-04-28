import {
    addPhoneMask,
    removeMask,
} from '@/utils/functions/masks'

import { type ChangeEvent, forwardRef, useEffect, useState } from 'react'

import { Input, type InputProps } from '../ui/input'

export type MaskProps = 'cpf' | 'phone' | 'cnpj'

interface InputMaskProps extends Omit<InputProps, 'defaultValue'> {
    mask: MaskProps
    onValueChange?: (value: string) => void
    defaultValue?: string
}

function addMaskToValue({ mask, value }: { mask: MaskProps; value?: string }) {
    if (!value) return ''

    switch (mask) {
        case 'phone':
            return addPhoneMask(value)

        default:
            return value
    }
}

const InputMask = forwardRef<HTMLInputElement, InputMaskProps>(
    ({ mask, onValueChange, defaultValue, ...props }, ref) => {
        const [value, setValue] = useState('')

        function handleChange(event: ChangeEvent<HTMLInputElement>) {
            const value = event.target.value
            const valueWithMask = addMaskToValue({ mask, value })

            setValue(valueWithMask)

            if (onValueChange) {
                const valueWithoutMask = removeMask(value)

                onValueChange(valueWithoutMask)
            }
        }

        useEffect(() => {
            if (!defaultValue) return

            const defaultValueWithMask = addMaskToValue({ mask, value: defaultValue })

            setValue(defaultValueWithMask)
        }, [defaultValue, mask])

        return <Input ref={ref} value={value} onChange={handleChange} {...props} />
    }
)

InputMask.displayName = 'InputMask'

export { InputMask }
