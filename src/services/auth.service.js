const { JWTHelper } = require("../helpers");
let _userService = null;

class AuthService{
    constructor({UserService}){
        _userService = UserService;
    }
    async signUp(user){
        const { username } = user;
        const userMatched = await _userService.getUserByUsername(username);
        if(userMatched){
            const error = new Error();
            error.status = 401;
            error.message = "User already exists";
            throw error;
        }
        return await _userService.create(user);
    }
    async signIn(user){
        const { username, password } = user;
        const userMatched = await _userService.getUserByUsername(username);
        if(!userMatched){
            const error = new Error();
            error.status = 401;
            error.message = "User does not exists";
            throw error;
        }

        const validatedPassword = userMatched.comparePasswords(password);
        if(!validatedPassword){
            const error = new Error();
            error.status = 400;
            error.message = "Wrong password";
            throw error;
        }
        const userToEncode = {
            id: userMatched._id,
            username: userMatched.username
        };
        const token = JWTHelper.generateToken(userToEncode);
        return { token, user:userMatched };
    }
}

module.exports = AuthService;