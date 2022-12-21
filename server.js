const express = require('express');

const app = express();
const PORT = 8080;


app.use(express.static('codemirror5'));

app.listen(PORT, () => {
    console.log("listening on port", PORT);
});