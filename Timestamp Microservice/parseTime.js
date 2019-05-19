const moment = require("moment");
const parseTime = function(input){
	let output, isNumber;
	isNumber = /^[0-9]*$/g;
	const formats = [
        "YYYY-MM-D",
        "D-MM-YYYY",
        "MMMM D, YYYY",
        "MMMM D YYYY",
        "MMM D, YYYY",
        "MMM D YYYY",
        "D MMMM YYYY",
        "D MMMM YY",
        "D MMM YYYY",
        "D MMM YY",
    ];
	if(isNumber.test(input)){
		var d = new Date(Number(input));
		// console.log(d);
		output = {
			"unix": d.getTime() ,
			"utc": d.toUTCString()
		}
	}else if(moment(input,formats,true).isValid()) {
		var d = new Date(input);
		output = {
			"unix": d.getTime() ,
			"utc": d.toUTCString()
		}
	}else {
		
		output = {
			"error" : "Invalid Date"
		}
	}
	return output;
}
module.exports = parseTime; //define a module