const bycrypt = require('bcrypt')

class BcryptHelper{

    async hashPassword(password,round=10){
        return await bycrypt.hash(password, round);
    }

    async deHashPassword(password,passwordCompare){
        return await bycrypt.compare(password,passwordCompare)
    }
    
}

module.exports = new BcryptHelper