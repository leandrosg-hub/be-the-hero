const crypto = required('crypto')

module.exports = function generateUniqueID () {
    return crypto.randomBytes(4).toString('HEX')
}