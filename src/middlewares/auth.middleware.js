const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = function(request, response, next){
    const authorization = request.headers["authorization"];
    if(!authorization){
        const error = new Error();
        error.status = 401;
        error.message = "Token must be send";
        throw error;
    }
    const token = authorization.split(" ")[1];
    jwt.verify(
        token,
        JWT_SECRET,
        function( error, decodedToken ){
            if(error){
                const error = new Error();
                error.status = 401;
                error.message = "Invalid token";
                throw error;
            }
            request.user = decodedToken.user;
            next();
        }
    );
};
