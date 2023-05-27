const { Router } = require("express");

module.exports = function({AuthController}){
    const router = new Router();

    router.post("/signup", AuthController.signUp);
    router.post("/signin", AuthController.signIn);

    return router;
};