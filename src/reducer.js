export const TYPE_CREATE = 'CREATE'
export const TYPE_UPDATE = 'UPDATE'
export const TYPE_DELETE = 'DELETE'

export const TYPE_INIT = 'INIT'

export const reducer = (state, action) => {
    switch (action.type) {
        case TYPE_CREATE : {
            return [action.data, ...state]
        }
        case TYPE_UPDATE: {
            return state.map(it => {
                if (it.id === action.data.id) {
                    return action.data
                }
                return it
            })
        }
        case TYPE_DELETE : {
            return state.filter(it => it.id !== action.data.id)
        }

        case TYPE_INIT: {
            return action.initData
        }
        default:
            return state;
    }
}