import { BUY_CAKE } from './cake-types'

export const BuyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}