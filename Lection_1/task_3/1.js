function solver(){
	var a = parseInt(document.getElementById('inp_a').value);
	var b = parseInt(document.getElementById('inp_b').value);
	var c = parseInt(document.getElementById('inp_c').value);
	var res = document.getElementById("res");
	var dres = document.getElementById("dres");
	var D = Math.pow(b,2)-4*a*c;
	if (D<=0){
		dres.innerHTML="D is less tnan 0!!! There are no existing solves";
	}else{
    	var x1 = (-b+Math.sqrt(D))/(2*a);
    	var x2 = (-b-Math.sqrt(D))/(2*a);
    	dres.innerHTML='Square root of D, is '+Math.sqrt(D);
    	res.innerHTML="x1 = "+x1+";  "+"x2 = "+x2+";";
    }	
}