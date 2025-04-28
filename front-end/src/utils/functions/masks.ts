/**
 * Adds a phone mask to a given numeric string.
 * The format applied is '(XX) XXXXX-XXXX'.
 * @param value The numeric string to format as phone.
 * @returns A string formatted with the phone mask.
 */
export function addPhoneMask(value: string) {
    return value
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .slice(0, 15)
}

/**
 * Adds a date mask to a given numeric string.
 * The format applied is 'DD/MM/YYYY'.
 * @param value The numeric string to format as date.
 * @returns A string formatted with the date mask.
 */
export function addDateMask(value: string): string {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '$1/$2')
        .replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3')
        .slice(0, 10)
}

export function addDateTimeMask(value: string): string {
    return value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "$1/$2")
        .replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3")
        .replace(/^(\d{2})\/(\d{2})\/(\d{4})(\d)/, "$1/$2/$3 $4")
        .replace(/^(\d{2})\/(\d{2})\/(\d{4}) (\d{2})(\d)/, "$1/$2/$3 $4:$5")
        .slice(0, 16);
}


/**
 * Removes all non-numeric characters from a given string.
 * @param value The string to remove the mask from.
 * @returns A string with all non-numeric characters removed.
 */
export function removeMask(value: string) {
    return value.replace(/\D/g, '')
}
