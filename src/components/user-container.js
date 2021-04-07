import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return userData.loading
        ? (<h2>LOADING</h2>)
        : userData.error
            ? (<h2>{userData.error}</h2>)
            : (userData?.users?.map(user => <p>{user.name}</p>))
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)