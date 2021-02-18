const multer = require('multer');
const path = require('path');
const slugify = require('slugify');

module.exports = (allowedMimes) => ({
    dest: path.resolve(__dirname, '..', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', 'uploads'))
        },
        filename: (req, file, cb) => {
            cb(null, `${new Date().getTime()}-${ 
                    slugify(file.originalname, {
                        lower: true,
                        language: 'pt'
                    })
                }`
            );
        }
    }),
    limits: {
        fileSize: process.env.UPLOAD_LIMIT * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid filetype.'));
        }
    }
});