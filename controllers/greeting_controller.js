var express = require ('express');
var router = express.Router();

router.get('/:name', (req, res) => {
res.render('greeting', {
    name: req.query.name,
});
})





module.exports =router;
