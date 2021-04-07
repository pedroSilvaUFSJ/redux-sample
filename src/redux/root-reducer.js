import { combineReducers } from 'redux'
import CakeReducer from './cakes/cake-reducer'
import IceCreamReducer from './iceCream/iceCream-reducer'
import UserReducer from './user/user-reducer'

const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer,
    user: UserReducer
})

export default rootReducer