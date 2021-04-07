import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BuyCake } from '../redux'

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>num of Cakes - {numOfCakes}</h2>
            <button onClick={()=> dispatch(BuyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
