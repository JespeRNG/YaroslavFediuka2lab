 function cipher(){
 	var shift = +document.getElementById('shift').value;
	var str = document.getElementById('input').value;
	var out = '';
    
        
	for (var i=0; i< str.length; i++){
      
		  var code = str.charCodeAt(i);
		  code = code + shift;
		  out += String.fromCharCode(code);
    }
	alert(out);
}

function uncipher(){
	var shift = -document.getElementById('shift').value;
	var str = document.getElementById('input').value;
	var out = '';
    
       
	for (var i=0; i< str.length; i++){
		var code = str.charCodeAt(i);
		code = code + shift;
		out += String.fromCharCode(code);
	}
	alert(out);
}