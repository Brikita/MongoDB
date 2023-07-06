const express = require('express');

//int app & middleware
const app = express();

app.listen(3000, () => {
    console.log('app listening in port 3000');

});


// routes
app.get('/books', (req, res) => {
    res.json({mssg: "welcome to the api"});
});