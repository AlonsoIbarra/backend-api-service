let _ideaService = null;

class IdeaController{
    constructor({IdeaService}){
        _ideaService = IdeaService;
    }
    async get(request, response){
        const { ideaId } = request.params;
        const user = await _ideaService.get(ideaId);
        return response.send(user);
    }
    async getAll(request, response){
        const ideas = await _ideaService.getAll();
        return response.send(ideas);
    }
    async create(request, response){
        const { body } = request;
        const createdIdea = await _ideaService.create(body);
        return response.status(201).send(createdIdea);
    }
    async update(request, response){
        const { body } = request;
        const { ideaId } = request.params;
        const updatedIdea = await _ideaService.update(ideaId, body);
        return response.send(updatedIdea);
    }
    async delete(request, response){
        const { ideaId } = request.params;
        const deletedIdea = await _ideaService.delete(ideaId);
        return response.send(deletedIdea);
    }
    async getUserIdeas(request, response){
        const { userId } = request.params;
        const ideas = await _ideaService.getUserIdeas(userId);
        return response.send(ideas);
    }
    async upvote(request, response){
        const { ideaId } = request.params;
        const idea = await _ideaService.updatedIdea(ideaId);
        return response.send(idea);
    }
    async downvote(request, response){
        const { ideaId } = request.params;
        const idea = await _ideaService.downvote(ideaId);
        return response.send(idea);
    }
}

module.exports = IdeaController;