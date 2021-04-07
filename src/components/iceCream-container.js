import React from 'react';
import { connect } from 'react-redux'
import { BuyIceCream } from '../redux'

function IceCreamContainer(props) {
    const { stateProp, dispatchProp } = props
    return (
        <div>
            <h2>Number of Icecreams - {stateProp}</h2>
            <button onClick={dispatchProp}>Buy Icecream</button>
        </div>
    )
}

/**
 * the state from the index store is mapped to props
 *
 * used for ONE REDUCER prop :: const mapStateToProps = state => {return { numOfIceCreams: state.numOfIceCreams     }}
 * used for MULTIREDUCER, on root-reducer
 * */
const mapStateToProps = (state) => {
    const iceCreamValue = state.iceCream.numOfIceCream
    return { stateProp: iceCreamValue }
}

/**
 * map the dispatch of the action to props
 * it is used when you want to achieve the state of the store on the component
 */
const mapDispatchToProps = dispatch => {
    return {
        dispatchProp: () => dispatch(BuyIceCream())
    }
}

/**
 * connect the react component to the redux store
 */
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);