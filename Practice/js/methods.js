const getUserId = (user) => {
    console.log(user.id)
}

function getUserFullName(user) {
    console.log(`${user.firstName} ${user.lastName}`);
}

function isAdult(user) {
    console.log(user.age >= 18 ? true : false)
}

export {
    getUserId as getId,
    getUserFullName,
    isAdult,
}