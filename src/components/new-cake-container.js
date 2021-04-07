import React, { useState } from 'react';
import { connect } from 'react-redux'
import { BuyCake } from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(() => 1)
    const { stateProp, dispatchProp } = props

    return (
        <div>
            <h2>Number of cakes - {stateProp}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => dispatchProp(number)}>Buy {number} Cake</button>
        </div >
    )
}

const mapStateToProps = ({ cake: { numOfCakes } }) => { return { stateProp: numOfCakes } }

const mapDispatchToProps = dispatch => {
    return {
        dispatchProp: (number) => dispatch(BuyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);