	var out1 = document.getElementById("output1");
	var out2 = document.getElementById("output2");

function symbols(){
	var inp = document.getElementById("text").value;
	var count = 0;
	for (var i=0; i < inp.length; i++){
		if (inp[i] === " "){
			count --;
		}
		count++;
	}
	out1.innerHTML= "Here you have "+count+" symbols;";
}

function words(){
	var inp = document.getElementById("text").value;
	var count = 0;
	
	count = inp.split(" ").length;

	out2.innerHTML="There are "+count+" words there";
}