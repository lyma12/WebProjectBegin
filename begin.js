const  express = require("express");
const web = express()
const port = 3000

web.get('/', (req, res) => res.send("Hello World"))
web.listen(port, ()=> console.log ('http://localhost:' + port))