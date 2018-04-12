var byId = function(id){return document.getElementById(id);};
function startTime() {
	var d = new Date();
	var h = checkTime(d.getHours());
	var m = checkTime(d.getMinutes());
	var s = checkTime(d.getSeconds());
	var c = document.querySelector('clock');
	c.innerHTML=[h,m,s].join(':');
	setTimeout(startTime, 100);
}
function getTime() {
	var d = new Date();
	var h = checkTime(d.getHours());
	var m = checkTime(d.getMinutes());
	var s = checkTime(d.getSeconds());
	return [h,m,s].join(':');
}
function checkTime(i) {
	return i < 10 ? '0'+i : i;
}
function getPage(page){
	var req = new XMLHttpRequest();
	req.open("get","https://jason841226.github.io/ESLab1/"+page);
	req.onload=function(){
		var content=byId("content");
		content.innerHTML=this.responseText;
	}
	req.send();
}
