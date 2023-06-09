let _authService = null;

class AuthController{
    constructor({AuthService}){
        _authService = AuthService;
    }
    async signUp(request, response){
        const {body } = request;
        const createdUser = await _authService.signUp(body);
        return response.status(201).send(createdUser);
    }
    async signIn(request, response){
        const {body } = request;
        const credentials = await _authService.signIn(body);
        return response.status(200).send(credentials);
    }
}

module.exports = AuthController;