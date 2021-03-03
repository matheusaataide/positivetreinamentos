const httpStatus = require('http-status');

const CourseController = database => ({
    delete: async (req, res) => {
        try{ 
            const { courses } = database;
            const flag = await courses.destroy({ where: req.params });
            return res
                    .status(flag ? httpStatus.OK : httpStatus.BAD_REQUEST)
                    .json({ success: flag });
        } catch (error) {
            return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json({ 
                        msg: "Error: We can't delete this course!",
                        error
                    });
        }
    },
    get: async (req, res) => {
        try {
            const { courses } = database;
            const course = await courses.findByPk(req.params.id);

            if (course == null) // Caso não encontre nenhum com este ID
                return res
                        .status(httpStatus.BAD_REQUEST)
                        .json({
                            msg: "We can't find a course with this id!",
                            data: null
                        });
            return res
                    .status(httpStatus.OK).json(course);
        } catch (error) {
            return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json({ 
                        msg: "Error: We can't recover this course!",
                        error
                    });
        }
    },
    getAll: async (req, res) => {
        try {
            const { courses, transformations } = database;
            const { limit, offset } = req.query;

            const list = await courses.findAll({
                order: [['created_at', 'DESC']],
                limit: limit || 3,
                offset: offset || 0,
                include: [{ model: transformations }]
            });

            return res
                    .status(httpStatus.OK)
                    .json(list);
        } catch (error) {
            return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json({ 
                        msg: "Error: We can't list the courses!",
                        error
                    });
        }
    },
    save: async (req, res) => {
        try {
            const { courses } = database;

            const data = {
                ...req.body,
                img: req.file ? req.file.filename : '',
                createdById: req.userId,
                updatedById: req.userId
            }
            const newInstance = await courses.create(data); 

            return res
                    .status(httpStatus.CREATED)
                    .json(newInstance);
        } catch (error) {
            return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json({ 
                        msg: "Error: We can't save this course!",
                        error
                    });
        }    
    },
    edit: async (req, res) => {
        try {
            const { courses } = database;

            const course = await courses.update(req.body, { where: req.params });

            return res.status(httpStatus.CREATED).json(course);
        } catch (error) {
            return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json({ 
                        msg: "Error: We can't update this course!",
                        error
                    });
        }
    }
});


module.exports = CourseController;