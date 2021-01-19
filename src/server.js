const express = require('express');
const route = require('./routes/route');

const server = express();

server.use("/", route);
server.use(express.static("public"));


server.listen(1010, () => {
    console.log("Server listen on port 1010");
});