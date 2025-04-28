import { format, parse } from 'date-fns'
import { ptBR } from 'date-fns/locale'

/**
 * Format a date as a string in the format 'dd/MM/yyyy'.
 *
 * @param {Date | string | number} date - The date to be formatted.
 *  - If a `Date` object is provided, it will be formatted directly.
 *  - If a `string` (e.g., '2024-02-20') or a `number` (timestamp) is provided, it will be parsed into a Date object.
 * @returns {string} A string representation of the date in the format 'dd/MM/yyyy'.
 *  - Returns an empty string (`""`) if the input is `undefined` or invalid.
 *
 * @example
 * // Using a Date object
 * formatDate(new Date(2024, 1, 20)) // '20/02/2024'
 *
 * @example
 * // Using a string in ISO format
 * formatDate('2024-02-20') // '20/02/2024'
 *
 * @example
 * // Using a timestamp
 * formatDate(1708396800000) // '20/02/2024' (Assuming timestamp in milliseconds)
 *
 * @example
 * // Handling an empty value
 * formatDate(undefined) // ''
 */
export function formatDate(date?: Date | string | number | null): string {
    if (!date) return ''

    const parsedDate = new Date(date)
    return format(parsedDate, 'dd/MM/yyyy', { locale: ptBR })
}

/**
 * Formata uma data para o formato "dd/MM/yyyy HH:mm".
 *
 * @param {Date | string | number | null} [date] - A data a ser formatada. Pode ser um objeto Date, uma string ou um timestamp numérico. Se for null ou undefined, retorna uma string vazia.
 * @returns {string} A data formatada no padrão "dd/MM/yyyy HH:mm" ou uma string vazia se a entrada for inválida.
 *
 * @example
 * formatDateTime(new Date()); // "10/08/2024 14:30"
 * formatDateTime("2024-08-10T12:00:00Z"); // "10/08/2024 09:00"
 * formatDateTime(1723286400000); // "10/08/2024 12:00"
 * formatDateTime(null); // ""
 */
export function formatDateTime(date?: Date | string | number | null): string {
    if (!date) return ''

    const parsedDate = new Date(date)
    return format(parsedDate, 'dd/MM/yyyy HH:mm', { locale: ptBR })
}

/**
 * Format a date as an ISO string in the format 'yyyy-MM-dd'.
 *
 * @param {Date | string} value - The date to be formatted.
 *  - If a `Date` object is provided, it will be formatted directly.
 *  - If a `string` is provided, it must be in the format 'ddMMyyyy' (e.g., '14022024') and will be parsed into a Date object.
 * @returns {string} A string representation of the date in the format 'yyyy-MM-dd'.
 *  - Returns an empty string (`""`) if the input is invalid.
 *
 * @example
 * // Using a Date object
 * formatDateToISO(new Date(2024, 1, 14)) // '2024-02-14'
 *
 * @example
 * // Using a string in 'ddMMyyyy' format
 * formatDateToISO('14022024') // '2024-02-14'
 *
 * @example
 * // Using a string with non-numeric characters (they will be removed)
 * formatDateToISO('14/02/2024') // '2024-02-14'
 *
 * @example
 * // Handling an invalid input
 * formatDateToISO('invalid-date') // 'Invalid Date' (or throws an error depending on usage)
 */
export function formatDateToISO(value: Date | string): string {
    if (value instanceof Date) {
        return format(value, 'yyyy-MM-dd')
    }
    const cleanValue = value.replace(/\D/g, '')

    const parsedDate = parse(cleanValue, 'ddMMyyyy', new Date())

    return format(parsedDate, 'yyyy-MM-dd')
}
