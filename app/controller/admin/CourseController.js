const Controller = require("../Controller");
const {CourseModel} = require("../../model/course");
const {StatusCodes: HttpStatus} = require("http-status-codes");


class CourseController extends Controller{
    async getAllCourses(req, res, next){
        try {
            const courses = await CourseModel.find({}).sort({_id:-1});
            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: {
                    courses
                }
            })
        }catch (e) {
            next(e);
        }
    }


    async createCourse(req, res, next){
        try{

        }catch (e) {
            next(e);
        }
    }
}

module.exports = {
    CourseController : new CourseController()
}