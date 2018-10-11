var c = document.getElementById("c");

document.getElementById("sum").onclick = function (){
	var a=parseInt(document.getElementById("a").value);
	var b=parseInt(document.getElementById("b").value);
	res=a+b;
	c.innerHTML=res;
}

document.getElementById("min").onclick = function (){
	var a=parseInt(document.getElementById("a").value);;
	var b=parseInt(document.getElementById("b").value);;
	res=a-b;
	c.innerHTML=res;
}

document.getElementById("umn").onclick = function (){
	var a=parseFloat(document.getElementById("a").value);;
	var b=parseFloat(document.getElementById("b").value);;
	res=a*b;
	c.innerHTML=res;
}

document.getElementById("del").onclick = function (){
	var a=parseFloat(document.getElementById("a").value);;
	var b=parseFloat(document.getElementById("b").value);;
	res=a/b;
	c.innerHTML=res;
}

document.getElementById("kor").onclick = function (){
	var uni=parseFloat(document.getElementById("uni").value);
	res=Math.sqrt(uni);
	uni_label.innerHTML=res;
}

document.getElementById("fak").onclick = function (){
	var uni=parseFloat(document.getElementById("uni").value);
	res=uni;
	var numbers=[];
	var n=0;
	for (var i=uni; i>=1; i--){
		numbers[n]=i;
		n++;
	}
	res=1;
	for (n; n>0; n--){
		res*=n;
	}
	document.getElementById("uni_label").innerHTML =res;
}