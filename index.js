const Apiserver = require("./api/Apiserver.js");
const express = require("express");


Apiserver.use(express.json());
const PORT = process.env.PORT || 5000;


const server = express();
server.use(Apiserver)



server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
