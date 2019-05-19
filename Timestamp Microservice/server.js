const express = require("express");
const parseTime = require("./parseTime.js");
const app = express();
console.log(__dirname);
app.use(express.static(__dirname+'/public'));
app.get('/',(req, res)=>{
  res.sendFile(__dirname+'/views/index.html');
});
app.get("/api/timestamp/:time",(req, res)=>{
	var value = req.params.time;
	res.json(parseTime(value));
	// res.json({"utc": new Date(Number(str))})
});
app.listen(process.env.PORT || 8080);