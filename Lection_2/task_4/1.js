var check_l = 1;
var check_p = 1;

function login_check(){
	emailValidate();
	passValidate();

	if (check_l == 1 && check_p == 1) alert ("Login successful");
	if (check_l == 1 && check_p == 0) alert ("Check your password");
	if (check_l == 0 && check_p == 1) alert ("Check your login");
	if (check_l == 0 && check_p == 0) alert ("Login failed");
}

function emailValidate(){
	var mail = document.getElementById("login").value;
	var cnt = 0; //counter for @
	var mem = 0; // '@' i position in string

	for (var i=0; i < mail.length; i++){
		if (mail[i] == "@"){
			cnt ++;
			mem = i;
		}
	}

	if (mail.lastIndexOf(".") < 2 || mail.indexOf("@") < 1 || mail.lastIndexOf(".")<mail.indexOf("@")+2 || mail.lastIndexOf(".")+3 > mail.length){
		check_l = 0;
		console.log ("da, v etom");
	}

	if (cnt < 1 || cnt > 1){
		check_l = 0;
	} 
}

function passValidate(){
	var pass = document.getElementById("pass").value;

	for (var i=0; i < pass.length; i++){
		if (pass.length < 8){
			console.log("length pass");
			check_p = 0;
			break;
		} 

		var code = pass.charCodeAt(i); //ASCII

		if (code >= 48 && code <= 57 || code >=65 && code <= 90 || code >=97 && code <= 122){
			console.log('success');
		}else{
			console.log("code pass");
			check_p = 0;
			break;
		}
	}
}
