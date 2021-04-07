import React from 'react';
import { connect } from 'react-redux'
import { BuyCake } from '../redux'

function CakeContainer(props) {
    const { stateProp, dispatchProp } = props
    return (
        <div>
            <h2>Number of cakes - {stateProp}</h2>
            <button onClick={dispatchProp}>Buy Cake</button>
        </div>
    )
}

/**
 * the state from the index store is mapped to props
 */
// const mapStateToProps = state => {return { numOfCakes: state.numOfCakes     }}
const mapStateToProps = ({ cake: { numOfCakes } }) => { return { stateProp: numOfCakes } }

/**
 * map the dispatch of the action to props
 * it is used when you want to achieve the state of the store on the component
 */
const mapDispatchToProps = dispatch => {
    return {
        dispatchProp: () => dispatch(BuyCake())
    }
}

/**
 * connect the react component to the redux store
 */
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);