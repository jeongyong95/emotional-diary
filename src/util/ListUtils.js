export const SORT_LATEST = 'latest'
export const SORT_OLDEST = 'oldest'

export const getSortOptions = () => {
    return [
        {
            name: "최신순",
            value: SORT_LATEST,
        },
        {
            name: "오래된 순",
            value: SORT_OLDEST,
        }
    ]
}