const {CourseController} = require("../../controller/admin/CourseController");
const router = require("express").Router();


/**
 * @swagger
 *  /admin/course/list:
 *      get:
 *          tags: [Course(Admin-Panel)]
 *          summary: Get all courses
 *          parameters:
 *              -   in: query
 *                  name: search
 *                  type: string
 *                  description: searching for title and text
 *          responses:
 *              200:
 *                  description: success
 *
 */
router.get("/list", CourseController.getAllCourses);

module.exports = {
    AdminApiCourseRouter : router
}