let _userService = null;

class UserController{
    constructor({UserService}){
        _userService = UserService;
    }
    async get(request, response){
        const { userId } = request.params;
        const user = await _userService.get(userId);
        return response.send(user);
    }
    async getAll(request, response){
        const { pageSize, pageNumber } = request.query;
        const users = await _userService.getAll(
            pageSize,
            pageNumber
        );
        return response.send(users);
    }
    async update(request, response){
        const { body } = request;
        const { userId } = request.params;
        const updatedUser = await _userService.update(userId, body);
        return response.send(updatedUser);
    }
    async delete(request, response){
        const { userId } = request.params;
        const deletedUser = await _userService.delete(userId);
        return response.send(deletedUser);
    }
}

module.exports = UserController;