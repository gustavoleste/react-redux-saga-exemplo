import meuIP from './ip'
import meuUA from './ua'
import {combineReducers} from 'redux'

const reducer = combineReducers({meuIP,meuUA})

export default reducer