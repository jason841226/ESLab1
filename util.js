var byId = function(id){return document.getElementById(id);};
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
            asycn:true,
            success:function(data){
                $('#content').html(data);
            }
        });
    });
}