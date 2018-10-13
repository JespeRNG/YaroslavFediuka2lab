var div_l = document.getElementById("lessons");
var div_c = document.getElementById("calls");

function shw_calls(){
   	if (div_c.style.display === "none" && div_l.style.display === "none") {
        div_c.style.display = "block";
    } else {
        div_c.style.display = "block";
        div_l.style.display = "none";
    }
}

function shw_lessons(){
	if (div_l.style.display === "none" && div_c.style.display === "none"){
		div_l.style.display = "block";
	} else {
		div_l.style.display = "block";
		div_c.style.display = "none"; 
    }
}