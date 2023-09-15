const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
/**
 * Sign Token
 * @param {*} user 
 * @returns 
 */
const tokenSign = async (user) => {
  try {
    /**
     * Generate token
     */
    const { id, role } = user
    const sign = jwt.sign(
      {
        id: id,
        role: role
      },
      JWT_SECRET,
      {}
    )
    return sign
  } catch (error) {
    return null
  }
}
/**
 * Verify token
 * @param {*} token 
 * @returns 
 */
const verifyToken = async (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

module.exports = { tokenSign, verifyToken }