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
    $(document).ready(function(){
        $.ajax({
            url: ("https://jason841226.github.io/ESLab1/"+page),
            
            success:function(data){
                //var content = $($.parseHTML(data, document, true));
                $('#content').html(data);
                eval($(data).find("script").text());
            }
        });
        //$.getScript("somescript.js", function(){
        //    alert("Script loaded and executed.");
        //});
        //$("#content").html(htmlobj.responseText);
    });
}