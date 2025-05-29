import { DialogClose, type DialogProps } from '@radix-ui/react-dialog'
import type { ReactNode } from 'react'
import { Heading } from '../heading/heading'
import { Button, type ButtonProps } from '../ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'
import { Plus } from 'lucide-react'

type ButtonVariant = ButtonProps['variant']

export function ModalTitle({
    children,
    variant = 'primary',
}: { children: string; variant?: 'primary' | 'destructive' }) {
    return (
        <DialogTitle>
            <Heading align={'center'} variant={variant} size="lg">
                {children}
            </Heading>
        </DialogTitle>
    )
}

export function ModalContent({
    children,
    className,
}: { children: ReactNode; className?: string }) {
    return <div className={className}>{children}</div>
}

export function ModalButtons({ children, ...rest }: Omit<ButtonProps, 'size'>) {
    return (
        <div className="flex gap-2 w-full">
            <DialogClose asChild>
                <Button variant="outline" size="lg" className="flex-1">
                    Cancelar
                </Button>
            </DialogClose>

            <Button {...rest} size="lg" className="flex-1">
                {children}
            </Button>
        </div>
    )
}

type ModalProps = DialogProps & {
    children: ReactNode
    label?: string
    description: string
    variant?: ButtonVariant
    triggerClassName?: string
    triggerDisable?: boolean
    icon?: boolean
}

export function Modal({
    label,
    variant = 'default',
    children,
    description,
    triggerClassName,
    triggerDisable = false,
    icon,
    ...rest
}: ModalProps) {
    return (
        <Dialog {...rest}>
            {label && (
                <DialogTrigger asChild>
                    <Button
                        variant={variant}
                        className={triggerClassName}
                        disabled={triggerDisable}
                    >
                        {icon && (
                            <Plus color='white' />
                        )}
                        {label}
                    </Button>
                </DialogTrigger>
            )}
            <DialogContent className="p-12">
                <DialogDescription className="sr-only">{description}</DialogDescription>
                {children}
            </DialogContent>
        </Dialog>
    )
}
