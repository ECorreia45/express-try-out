let express = require('express');
let router = express.Router();

router.get('/about', function (req, res) {
    res.render("about.hbs", {
        title: "About - Express App"
    });
})

module.exports = router;