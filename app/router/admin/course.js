const {CourseController} = require("../../controller/admin/CourseController");
const router = require("express").Router();

router.get("/list", CourseController.getAllCourses);

module.exports = {
    AdminApiCourseRouter : router
}