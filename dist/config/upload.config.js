"use strict";

var multer = require('multer');

var path = require('path');

var slugify = require('slugify');

module.exports = function (allowedMimes) {
  return {
    dest: path.resolve(__dirname, '..', 'uploads'),
    storage: multer.diskStorage({
      destination: function destination(req, file, cb) {
        cb(null, path.resolve(__dirname, '..', 'uploads'));
      },
      filename: function filename(req, file, cb) {
        cb(null, "".concat(new Date().getTime(), "-").concat(slugify(file.originalname, {
          lower: true,
          language: 'pt'
        })));
      }
    }),
    limits: {
      fileSize: process.env.UPLOAD_LIMIT * 1024 * 1024
    },
    fileFilter: function fileFilter(req, file, cb) {
      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Invalid filetype.'));
      }
    }
  };
};
//# sourceMappingURL=upload.config.js.map