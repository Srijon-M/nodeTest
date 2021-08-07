const os = require('os')

//current user info
const user = os.userInfo()
console.log(user)

//System uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

//information regarding current os
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS)