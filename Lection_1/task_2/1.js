var a=document.getElementById("a");
var b=document.getElementById("b");
var c=document.getElementById("c");
var uni=document.getElementById("uni");
var res;

document.getElementById("sum").onclick = function (){
	a=parseInt(a.value);
	b=parseInt(b.value);
	res=a+b;
	c.innerHTML=res;
}

document.getElementById("min").onclick = function (){
	a=parseInt(a.value);
	b=parseInt(b.value);
	res=a-b;
	c.innerHTML=res;
}

document.getElementById("umn").onclick = function (){
	a=parseFloat(a.value);
	b=parseFloat(b.value);
	res=a*b;
	c.innerHTML=res;
}

document.getElementById("del").onclick = function (){
	a=parseFloat(a.value);
	b=parseFloat(b.value);
	res=a/b;
	c.innerHTML=res;
}

document.getElementById("kor").onclick = function (){
	uni=parseFloat(uni.value);
	res=Math.sqrt(uni);
	alert(res);
	uni_label.innerHTML=res;
}

document.getElementById("fak").onclick = function (){
	uni=uni.value;
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
	console.log(res);
}