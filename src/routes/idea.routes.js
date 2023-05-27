const { Router } = require("express");
const { AuthMiddleware, ParseIntMiddleware } = require("../middlewares")

module.exports = function({IdeaController}){
    const router = new Router();

    router.get(
        "/:ideaId",
        [ AuthMiddleware ],
        IdeaController.get
    );
    router.get(
        "",
        [
            AuthMiddleware,
            ParseIntMiddleware
        ],
        IdeaController.getAll
    );
    router.get(
        "/:userId/all",
        [ AuthMiddleware ],
        IdeaController.getUserIdeas
    );
    router.patch(
        "/:ideaId",
        [ AuthMiddleware ],
        IdeaController.update
    );
    router.delete(
        "/:ideaId",
        [ AuthMiddleware ],
        IdeaController.delete
    );
    router.post(
        "",
        [ AuthMiddleware ],
        IdeaController.create
    );
    router.post(
        "/:ideaId/upvote",
        [ AuthMiddleware ],
        IdeaController.upvote
    );
    router.post(
        "/:ideaId/downvote",
        [ AuthMiddleware ],
        IdeaController.downvote
    );

    return router;
};