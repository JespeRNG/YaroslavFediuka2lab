function login(){
	var log = document.getElementById("login").value;
	var pass = document.getElementById("pass").value;
	var log_conf = 0; //login confirmation
	var cnt = 0; //counter for @
	var pass_conf = 0; //password confirmation
	var numbs = ["1","2","3","4","5","6","7","8","9","0"];
	
	//login check
	for (var i=0; i < log.length; i++){ 
		if (log[i]=="@"){
			cnt++;
			log_conf=1;
		}else {
			log_conf = 0;
		}

		if (cnt > 1 || cnt < 1){
			log_conf=0;
		}
	}
	cnt = 0;

	//password check
	for (var i=0; i < pass.length; i++){ 
		if (pass.length < 8){
			pass_conf = 0;
		}else {
			pass_conf = 1;
		}

		for (var j=0; j < numbs.length; j++){
			if (pass[i]==numbs[j]){
				pass_conf = 1;
			}else{
				pass_conf = 0;
				console.log ("err");
			}
		}
	}

	if (pass_conf == 1 && log_conf == 1){
		alert ("Login successful!");
	}else {
		alert ("Login failed");
	}
}