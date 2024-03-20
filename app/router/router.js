
const { AdminApiRoutes } = require("./admin/adminRoutes");
const {UserRoutes} = require("./user/user");


const router = require("express").Router();

router.use("/admin", AdminApiRoutes);
router.use(UserRoutes);


module.exports = {
    AllRoutes : router
}