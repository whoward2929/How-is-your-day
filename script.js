<input type="text" id="currentDate">
var today = new Date();
var date = today. getFullYear()+'-'+(today. getMonth()+1)+'-'+today. getDate();
document. getElementById("currentDate"). value = date;