const jwt = require ('jsonwebtoken');

module.exports = {
    
    auth : (req, res, next) => {

        if (req.method !== "OPTIONS") {

            //.verify ngecheck token masih ada atau tidak/kadaluarsa
            jwt.verify(req.token, 'onepiece123', (error, decoded) => {
                if (error) {
                    // console.log(req.token)
                    // success = false;
                    return res.status(500).json({ message: "User not authorized.", error: "User not authorized." , error});
                }
                // console.log(decoded)
                req.user = decoded;
                next(); //ke function (req,res) di back end paramater 3
            });
        } else {
            next(); //langsung next ke frontend
        }
    },
    authEmail: (req, res, next) => {

        if (req.method !== "OPTIONS") {
            jwt.verify(req.token, 'onepiece123', (error, decoded) => {
                if (error) {
                    return res.status(500).json({ message: "Url already expired!", error: "Url already expired!" , error});
                }             
                req.email = decoded.email;
                next(); 
            });
        } else {
            next(); //langsung next ke frontend
        }
    }
}