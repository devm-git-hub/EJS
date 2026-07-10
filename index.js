const express = require('express');
const app = express();

let port = 9000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});