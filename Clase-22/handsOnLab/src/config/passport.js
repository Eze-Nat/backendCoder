import passport from "passport"
import jwt from "passport.jwt";

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJWT

export const initializePassport = () => {
  passport.use('jwt', new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
    secretOrKey: 'coderSecret'
  }, async(jwtPayload, done)=>{
    try {
      return done(null, jwtPayload)
    } catch (error) {
      return done(error)
    }
  }))
}

const cookieExtractor = req => {
  let token;
  if(req && req.cookies) {
    token = req.cookies['coderCookie']
  }
}