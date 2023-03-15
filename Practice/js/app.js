console.log(document.querySelector('div'))

import user from "./users.js"
// import {
//     getId, 
//     getUserFullName,
//     isAdult,
// } from "./methods.js"

import * as userInfoService from "./methods.js"
console.log(userInfoService)

userInfoService.getId(user);
userInfoService.getUserFullName(user);
userInfoService.isAdult(user);