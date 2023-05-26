let _commentService = null;

class CommentController{
    constructor({CommentService}){
        _commentService = CommentService;
    }
    async get(request, response){
        const { commentId } = request.params;
        const comment = await _commentService.get(commentId);
        return response.send(comment);
    }
    async update(request, response){
        const { body } = request;
        const { commentId } = request.params;
        const commentUpdated = await _commentService.update(commentId, body);
        return response.send(commentUpdated);
    }
    async delete(request, response){
        const { commentId } = request.params;
        const deletedComment = await _commentService.delete(commentId);
        return response.send(deletedComment);
    }
    async getIdeaComment(request, response){
        const { ideaId } =request.params;
        const comments = await _commentService.getIdeaComment(ideaId);
        return response.send(comments)
    }
    async createComment(request, response){
        const {body}= request;
        const {ideaId}= request.params;
        const createdComment = await _commentService.createComment(body,ideaId);
        return response.status(201).send(createdComment);
    }
}

module.exports = CommentController;