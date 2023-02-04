var Express = require("express");
var router = Express.Router();
var controller = require("../controllers/appController");

router.get('/orders', controller.getUsers);

module.exports = {
    router:router
}
