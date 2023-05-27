const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

module.exports = function({CommentController}){
    const router = new Router();

    router.get(
        "/single/:commentId",
        [ AuthMiddleware ],
        CommentController.get
    );
    router.get(
        "/:ideaId",
        [ AuthMiddleware ],
        CommentController.getIdeaComments
    );
    router.patch(
        "/:commentId",
        [ AuthMiddleware ],
        CommentController.update
    );
    router.delete(
        "/:commentId",
        [ AuthMiddleware ],
        CommentController.delete
    );
    router.post(
        "/:ideaId",
        [ AuthMiddleware ],
        CommentController.createComment
    );

    return router;
};