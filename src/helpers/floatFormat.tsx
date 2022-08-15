export const floatFormat = (value : string) :string => {
    const number = parseFloat(value);
    if (number > 1000000000) {
        return `${(number / 1000000000).toFixed(2)}B`
    }
    if (number > 1000000) {
        return `${(number / 1000000).toFixed(2)}M`

    }

    if (number > 1000) {
        return `${(number / 1000).toFixed(2)}K`
    }
    return number.toFixed(2)
}