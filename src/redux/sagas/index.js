import {takeEvery, put, call} from 'redux-saga/effects'
import actions from '../actions'
import axios from 'axios'

function* saga(){
        yield takeEvery('IP_REQUEST', getIP)
        yield takeEvery('UA_REQUEST', getUA)
}

function* getIP(){
        try{
                const response = yield call (axios.get, 'https://httpbin.org/ip')
                yield put (actions.ipRequestSuccess(response.data.origin))
        }catch(error){
                console.log(error)
                yield put(actions.ipRequestFailure())
        }
}

function* getUA(){
        try{
                const response = yield call (axios.get, 'https://httpbin.org/user-agent')
                yield put (actions.uaRequestSuccess(response['data']['user-agent']))
        }catch(error){
                console.log(error)
                yield put(actions.uaRequestFailure())
        }
}

export default saga
