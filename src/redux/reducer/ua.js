const INITAL_STATE = {
        ua: 'Desconhecido',
        error: false,
        isFetching: false
}

const uaReducer = (state = INITAL_STATE, action) => {
        switch(action.type){
                case 'UA_REQUEST':
                        return {
                                ...state,
                                isFetching: action.isFetching
                        }
                case 'UA_REQUEST_SUCCESS':
                        return {
                                ...state,
                                ua: action.ua,
                                isFetching: action.isFetching
                        }
                case 'UA_REQUEST_FAILURE':
                        return {
                                ...state,
                                ua: action.ua,
                                isFetching: action.isFetching,
                                error: action.error
                        }
                default:
                        return state
        }
}

export default uaReducer
