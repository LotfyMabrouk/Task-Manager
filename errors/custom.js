class CustomErr extends Error{
    constructor(message , statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg , status)=>{
    return new CustomErr(msg , status)
}
module.exports = { createCustomError , CustomErr }