var express = require('express');
var router = express.Router();

const {generateHTML} = require('../ical/src/js/gen.js');
const {getStudentClasses} = require('../src/js/getStudentClasses.js');

const error = (title, message) => ` <h1>${title}</h1><p>${message}</p>`;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send(error("An Error occurred", "No data was submitted."));
});
router.post('/', function (req, res, next) {
    getStudentClasses(req.body).then(studentClasses => {
        try {
            const html = generateHTML(studentClasses);
            res.send(html);
        } catch (e) {
            console.error(e.stack);
            res.send(error("An Error occurred", "An unknown error occurred. Please try again. If the problem persists contact me."));
        }
    }).catch(err => {
        res.send(error(err.errorTitle, err.errorMessage));
    });
});

module.exports = router;
