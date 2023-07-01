export const getFormattedDate = (target) => {
    let year = target.getFullYear()
    let month = target.getMonth() + 1
    let date = target.getDate()

    if (month < 10) {
        month = `0${month}`
    }

    if (date < 10) {
        date = `0${date}`
    }

    return `${year}-${month}-${date}`
}

export const getMonthRange = (date) => {
    const startTimestamp = new Date(date.getFullYear(), date.getMonth(), 1).getTime()
    const endTimestamp = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59)
    return {startTimestamp, endTimestamp}
}