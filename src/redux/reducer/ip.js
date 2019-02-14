const INITAL_STATE = {
        ip: '0.0.0.0',
        error: false,
        isFetching: false
}

const ipReducer = (state = INITAL_STATE, action) => {
        switch(action.type){
                case 'IP_REQUEST':
                        return {
                                ...state,
                                ip: action.ip,
                                isFetching: action.isFetching,
                                error: action.error
                        }
                case 'IP_REQUEST_SUCCESS':
                        return {
                                ...state,
                                ip: action.ip,
                                isFetching: action.isFetching
                        }
                case 'IP_REQUEST_FAILURE':
                        return {
                                ...state,
                                ip: action.ip,
                                isFetching: action.isFetching,
                                error: action.error
                        }
                default:
                        return state
        }
}

export default ipReducer
