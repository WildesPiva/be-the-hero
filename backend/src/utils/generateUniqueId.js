const cripto = require("crypto")

module.exports = function generateUniqueId(){
    return (cripto.randomBytes(4).toString('HEX'))
}
