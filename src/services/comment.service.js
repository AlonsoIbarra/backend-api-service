const BaseService = require("./base.service");
let _commentRepository = null;
let _ideaRepository = null;

class CommentService extends BaseService{
    constructor({CommentRepository, IdeaRepository}){
        super(CommentRepository);
        _commentRepository = CommentRepository;
        _ideaRepository = IdeaRepository;
    }
    async getIdeaComments(ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = "IdeaId must be sent";
            throw error;
        }

        const idea = await _ideaRepository.get(ideaId);
        if(!idea){
            const error = new Error();
            error.status = 400;
            error.message = "Idea does not exists";
            throw error;
        }

        const { comments } = idea;
        return comments;
    }
    async createComment(comment, ideaId){
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = "IdeaId must be sent";
            throw error;
        }

        const idea = await _ideaRepository.get(ideaId);
        if(!idea){
            const error = new Error();
            error.status = 400;
            error.message = "Idea does not exists";
            throw error;
        }

        const newComment = await _commentRepository.create(comment);
        idea.comments.push(newComment);
        await _ideaRepository.update(ideaId, {comments: idea.comments });
        return newComment;
    }
}
module.exports = CommentService;