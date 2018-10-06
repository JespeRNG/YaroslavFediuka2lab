function solver(){
	var a = parseInt(document.getElementById('inp_a').value);
	var b = parseInt(document.getElementById('inp_b').value);
	var c = parseInt(document.getElementById('inp_c').value);
	var D = Math.pow(b,2)-4*a*c;
	if (D<=0){
		alert("D is less than 0 !!!");
	}else{
		alert('D equals '+D);
    	var x1 = (-b+Math.sqrt(D))/(2*a);
    	var x2 = (-b-Math.sqrt(D))/(2*a);
    	alert('Square root of D, is '+Math.sqrt(D));
    	alert ('x1= '+x1);
    	alert ('x2= '+x2);
    }	
}