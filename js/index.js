var app = {			
	
	};
	var contador = 0;	
	var verificador = 0;
	
	function accelerometer(){ 
		document.getElementById('status').innerHTML = "";
		navigator.accelerometer.getCurrentAcceleration(motion, error);
	}
	function motion(acceleration){
		var accel_x = acceleration.x;
		var accel_x = parseInt(accel_x); 
		
		var accel_y = acceleration.y;
		var accel_y =parseInt(accel_y); 
		
		var accel_z = acceleration.z;
		var accel_z = parseInt(accel_z); 
		
		if(contador < 5){
				localStorage.setItem("accel_x"+contador, accel_x);
				localStorage.setItem("accel_y"+contador, accel_y);
				localStorage.setItem("accel_z"+contador, accel_z);
				
				document.getElementById('status').innerHTML += "<br>contador "+contador+"<br>X - "+accel_x+"<br>Y - "+accel_y+"<br>Z - "+accel_z;
				
				contador++;
				accelerometer();
			} 
			else
			{
				verificacao();
			}
		
	}
	function error(){
		alert('Error!');
	}
	function verificacao(){
		for (primeiro = 0; primeiro < 4; primeiro++){
				var segundo = primeiro+1; 
				if (localStorage.getItem("string"+primeiro) != localStorage.getItem("string"+segundo)){	
					verificador++;
				}
			}
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador+" mudan?as";
		
		contador = 0;	
		verificador = 0;
	}
	
	