const ipRequest = () => ({
        type:'IP_REQUEST',
         ip:'0.0.0.0',
        isFetching: true,
        error: false
})

const ipRequestSuccess = ip => ({
        type:'IP_REQUEST_SUCCESS',
        ip,
        isFetching: false,
        error: false
})

const ipRequestFailure = () => ({
        type:'IP_REQUEST_FAILURE',
        ip: '0.0.0.0',
        isFetching: false,
        error: true
})

const uaRequest = () => ({
        type:'UA_REQUEST',
        isFetching: true,
        error: false
})

const uaRequestSuccess = ua => ({
        type:'UA_REQUEST_SUCCESS',
        ua,
        isFetching: false,
        error: false

})

const uaRequestFailure = () => ({
        type:'UA_REQUEST_FAILURE',
        ua: 'Desconhecido',
        isFetching: false,
        error: true
})

const actions = {
        ipRequest,
        ipRequestSuccess,
        ipRequestFailure,
        uaRequest,
        uaRequestSuccess,
        uaRequestFailure
}

export default actions