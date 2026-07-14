const express = require('express');
const app = express();

let port = 9000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render("home.ejs");
})


//Passing Data to the ejs file
app.get('/rollDice', (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { num });
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});