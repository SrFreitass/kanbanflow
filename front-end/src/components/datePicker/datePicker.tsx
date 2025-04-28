import { ptBR } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import { Calendar, type CalendarProps } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { addDateMask } from '@/utils/functions/masks'
import { parse } from 'date-fns'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { formatDate, formatDateToISO } from '@/utils/functions/date'

export interface DatePickerProps extends Omit<CalendarProps, 'defaultValue'> {
    onSelectedValue: (date: string) => void
    defaultValue?: string
    placeholder?: string
}

export function DatePicker({
    onSelectedValue,
    placeholder,
    defaultValue = '',
    className,
    ...props
}: DatePickerProps) {
    const defaultDate =
        defaultValue && parse(defaultValue, 'yyyy-MM-dd', new Date())

    const [open, setOpen] = useState(false)

    const [inputValue, setInputValue] = useState<string>(formatDate(defaultDate))

    const [date, setDate] = useState<Date | undefined>(defaultDate || undefined)
    const [month, setMonth] = useState(new Date())

    function clearStates() {
        setInputValue('')
        onSelectedValue('')
        setDate(undefined)
    }

    function handleInputValue(value?: string) {
        if (!value) return clearStates()

        setInputValue(value)

        if (value.length === 10) {
            const parsedDate = parse(value, 'dd/MM/yyyy', new Date())
            onSelectedValue(formatDateToISO(parsedDate))
            setDate(parsedDate)
            setMonth(parsedDate)
        }
    }

    function handleSelectedValue(date?: Date) {
        if (!date) return
        onSelectedValue(formatDateToISO(date))
        setInputValue(formatDate(date))
        setDate(date)
        setMonth(date)
        setOpen(false)
    }

    function handleBlur() {
        setTimeout(() => {
            setOpen(false)
        }, 200)
    }

    return (
        <Popover onOpenChange={setOpen} open={open}>
            <PopoverTrigger asChild>
                <Button
                    variant={'outline'}
                    className={cn(
                        'w-[240px] justify-start text-left font-normal',
                        !date && 'text-muted-foreground'
                    )}
                >
                    <CalendarIcon />
                    {date ? formatDate(date) : <span>Selecione a data</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent
                align="start"
                className="flex w-auto flex-col space-y-2 p-2"
            >
                <Input
                    value={addDateMask(inputValue)}
                    className="h-8"
                    onFocus={() => setOpen(true)}
                    onBlur={handleBlur}
                    onChange={e => handleInputValue(e.target.value)}
                    iconRight={<CalendarIcon className="size-4" />}
                />
                <div className="rounded-md border">
                    <Calendar
                        {...props}
                        mode="single"
                        locale={ptBR}
                        selected={date}
                        defaultMonth={date}
                        month={month}
                        onMonthChange={setMonth}
                        onSelect={handleSelectedValue}
                    />
                </div>
            </PopoverContent>
        </Popover>
    )
}