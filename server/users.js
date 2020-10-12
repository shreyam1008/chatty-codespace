const users = []

const addUser = ({id, name, room}) => {
    //change name to good name
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase()

    const existingUser = users.find(
        (user) => user.room === room && user.name ===name
    )
    if(existingUser){
        return {error: "username taken baro. try something unique"}
    }
    const user = {id, name, room}
    users.push(user)
    return {user}

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = () => {
    
}

const getUserInRoom = () => {
    
}

