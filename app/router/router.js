const {UserRoutes} = require("./user/user");


const router = require("express").Router();

router.use(UserRoutes);


module.exports = {
    AllRoutes : router
}