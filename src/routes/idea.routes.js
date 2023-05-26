const { Router } = require("express");

module.exports = function({IdeaController}){
    const router = new Router();

    router.get("/:ideaId", IdeaController.get);
    router.get("", IdeaController.getAll);
    router.get("/:userId/all", IdeaController.getUserIdeas);
    router.patch("/:ideaId", IdeaController.update);
    router.delete("/:ideaId", IdeaController.delete);
    router.post("", IdeaController.create);
    router.post("/:ideaId/upvote", IdeaController.upvote);
    router.post("/:ideaId/downvote", IdeaController.downvote);

    return router;
};