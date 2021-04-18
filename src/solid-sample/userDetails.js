const UserDetails = (user) => {

    const showDetails = (item) => {
        alert(item.contact)
    }

    return <div key={user.id} onClick={() => showDetails(user)}>
        <div>{user.name}</div>
        <div>{user.email}</div>
    </div>
}