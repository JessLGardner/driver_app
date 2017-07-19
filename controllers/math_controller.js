const express = require('express');
const router = express.Router();

router.get('/:operator', (req, res) => {
   if (req.params.operator === "add") {
    let sum = parseInt(req.query.num1) + parseInt(req.query.num2);
    res.send(`${sum}`);
    } else if (req.params.operator === "subtract") {
    let sum = parseInt(req.query.num1) - parseInt(req.query.num2);
    res.send(`${sum}`);
    } else if (req.params.operator === "divide") {
    let sum = parseInt(req.query.num1) / parseInt(req.query.num2);
    res.send(`${sum}`);
    }  else if (req.params.operator === "multiply") {
    let sum = parseInt(req.query.num1) * parseInt(req.query.num2);
    res.send(`${sum}`);
    }
});





module.exports = router;