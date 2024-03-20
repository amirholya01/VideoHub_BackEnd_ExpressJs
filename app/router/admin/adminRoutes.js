const { AdminApiCategoryRouter} = require("./category");
const {AdminApiCourseRouter} = require("./course");

const router = require("express").Router();

/**
 * @swagger
 *  tags:
 *     -    name: Admin-Panel
 *          description: all methods and routes for course
 *     -    name: Course(Admin-Panel)
 *          description: all methods and routes for course
 *     -    name: Category(Admin-Panel)
 *          description: all methods and routes for category
 */
router.use("/course", AdminApiCourseRouter);
router.use("/category", AdminApiCategoryRouter);


module.exports = {
    AdminApiRoutes : router
}