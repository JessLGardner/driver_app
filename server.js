const express = require ('express');
const hbs = require ('hbs');
const app = express ();

app.set('view engine', 'hbs');

const mathController = require('./controllers/math_controller');
app.use('/math', mathController);





const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Im running on port  ${port}`);
})