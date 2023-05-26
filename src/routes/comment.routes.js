const { Router } = require("express");

module.exports = function({CommentController}){
    const router = new Router();

    router.get("/single/:commentId", CommentController.get);
    router.get("/:ideaId", CommentController.getIdeaComments);
    router.patch("/:commentId", CommentController.update);
    router.delete("/:commentId", CommentController.delete);
    router.post("/:ideaId", CommentController.createComment);

    return router;
};