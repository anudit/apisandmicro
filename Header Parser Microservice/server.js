const express = require("express");
const parseTime = require("./parseTime.js");
const app = express();
console.log(__dirname);
app.use(express.static(__dirname+'/public'));
app.get('/',(req, res)=>{
  res.sendFile(__dirname+'/views/index.html');
});
app.get("/api/whoami",(req, res)=>{
	res.json({"ipaddress":req.connection.remoteAddress,
            "language": req.headers["accept-language"] ,
            "software":req.headers['user-agent']})
});
app.listen(process.env.PORT || 8080);