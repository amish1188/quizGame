const users = new Map();


//get all info based on user name
function getUser(id) {
    return users.get(id)
}


//returns true or false
function verifyuser(id, password){
    const user = getUser(id)
    if(!user){
        return false
    }
    return user.password === password;
}


//id which is nick and password to set up a new user
function createUser(id, password){
    if(getUser(id)){
        return false
    }

    const user = {
        id: id,
        password: password,
    }

    users.set(id, user);
    return true;
}



function resetAllUsers() {
    users.clear()
}

module.exports = {getUser, verifyuser, createUser, resetAllUsers};