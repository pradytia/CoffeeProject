const jwt = require('jsonwebtoken');

module.exports = {
    createJWTToken: (payload) => {
        return jwt.sign(payload, 'onepiece123', { expiresIn : '24h'})
    }
}