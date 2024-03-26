const Joi = require("@hapi/joi");
const createError = require("http-errors");
const { MongoIDPattern } = require("../../util/constant");
const createCourseSchema = Joi.object({
    title : Joi.string().min(3).max(30).error(createError.BadRequest("عنوان دوره صحیح نمیباشد")),
    text: Joi.string().error(createError.BadRequest("متن ارسال شده صحیح نمیباشد")),
    short_text: Joi.string().error(createError.BadRequest("متن ارسال شده صحیح نمیباشد")),
    tags: Joi.array().min(0).max(20).error(createError.BadRequest("برچسب ها نمیتواند بیشتر از 20 ایتم باشد")),
    category: Joi.string().regex(MongoIDPattern).error(createError.BadRequest("دسته بندی مورد نظر یافت نشد")),
    filename: Joi.string().regex(/(\.png|\.jpg|\.webp|\.jpeg|\.gif)$/).error(createError.BadRequest("تصویر ارسال شده صحیح نمیباشد")),
    fileUploadPath : Joi.allow()
});


module.exports = {
    createCourseSchema
}