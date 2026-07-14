const express = require('express');
const app = express();

let port = 9000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render("home.ejs");
})
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});