const { verifyToken } = require('@utils/handlers/handlerJwt')
/** 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

const authMiddleware = async (req, res, next) => {
  try { 
  if(!req.headers.authorization){    
    res.status(401).send('not token access');
    return
  }
  const tokenSession = req.headers.authorization.split(' ').pop()
  const verify = await verifyToken(tokenSession)
  if(!verify.id){
    res.status(401).send('Error token id');
  }

  /**
   * Search user by id in Firestore, MogoDB etc...
   */
  const querySnapshot = await db.collection('users').get();
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  let user;
  data.forEach((u) => {
      if (u.id === verify.id) {
        user = u
      }
  });
  req.user = user
  next()
  } catch (error) {
    res.status(500).send('not token access error server');
  }
}

module.exports = authMiddleware
