 function toEncrypt(){
	var shift = document.getElementById('shift').value;
	shift = (26 + shift) % 26;
	var str = document.getElementById('input').value;
	var res = document.getElementById("res");
	var result = "";

	for (var i = 0; i < str.length; i++) {
		var code = str.charCodeAt(i);

		if(65 <= code && code <=  90) result += String.fromCharCode((code - 65 + shift) % 26 + 65);  // Uppercase
		else if(97 <= code && code <= 122) result += String.fromCharCode((code - 97 + shift) % 26 + 97);  // Lowercase
		else result += str.charAt(i);
	}
	res.innerHTML = result;
	return result;
}

function toDecrypt() {
	var shift = document.getElementById('shift').value;
	shift = (26+shift) % 26;
	var str = document.getElementById('input').value;
	var res = document.getElementById("res");
	var result = "";

	for (var i=0; i < str.length; i++) {
		var code = str.charCodeAt(i);

		if (65 <= code  && code <= 90) result += String.fromCharCode((code - 65 - shift) % 26 +65);
		else if (97 <= code && code <= 122) result += String.fromCharCode((code - 97 - shift) % 25 + 97);
		else result += str.charAt(i);
	}
	res.innerHTML = result;
	return result;
};