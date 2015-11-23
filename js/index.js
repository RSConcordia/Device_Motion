var app = {			
	
	};
	var contador = 0;	
	var verificador_x = 0;
	var verificador_y = 0;
	var verificador_z = 0;
	
	function start(){
		document.getElementById('status').innerHTML = "";
		
		contador = 0;	
		verificador_x = 0;
		verificador_y = 0;
		verificador_z = 0;
		
		accelerometer();
	}	
	function accelerometer(){ 
		navigator.accelerometer.getCurrentAcceleration(motion, error);
	}
	function motion(acceleration){
		var accel_x = acceleration.x;
		var accel_x = parseInt(accel_x); 
		
		var accel_y = acceleration.y;
		var accel_y =parseInt(accel_y); 
		
		var accel_z = acceleration.z;
		var accel_z = parseInt(accel_z); 
		
		if(contador < 50){
		/*	localStorage.setItem("accel_x", accel_x);
			localStorage.setItem("accel_y", accel_y);
			localStorage.setItem("accel_z", accel_z); */
			
			document.getElementById('status').innerHTML += "<br><h2>"+contador+"</h2><br>X - "+accel_x+"<br>Y - "+accel_y+"<br>Z - "+accel_z;
			compass();
		}
		else
		{
			document.getElementById('status').innerHTML += "<br><h2>---§---</h2>";
		}
	}
	function error(){
		alert('Error!');
	}
	function onError(compassError) {
		alert('Compass error: ' + compassError.code);
	};
	function compass(){
		navigator.compass.getCurrentHeading(onSuccess, onError);	
	}	
	function onSuccess(heading){
		var compass = heading.magneticHeading;
		var compass = parseInt(compass);
	
		document.getElementById('status').innerHTML += "<br> compass - "+compass;
		contador++;
		setTimeout(accelerometer, 100);	
	}
/*	function movimento(){
		for (primeiro = 0; primeiro < 49; primeiro++){
				var segundo = primeiro+1; 
				
				var ddp_x = localStorage.getItem("accel_x"+primeiro) - localStorage.getItem("accel_x"+segundo);
				var ddp_y = localStorage.getItem("accel_y"+primeiro) - localStorage.getItem("accel_y"+segundo);
				var ddp_z = localStorage.getItem("accel_z"+primeiro) - localStorage.getItem("accel_z"+segundo);
			
				if (ddp_x > '1' || ddp_x < '-1'){	
					verificador_x++;
				}
				if (ddp_y > '1' || ddp_y < '-1'){	
					verificador_y++;
				}
				if (ddp_z > '3' || ddp_z < '-3'){	
					verificador_z++;
				}
			}
		
		document.getElementById('status').innerHTML += "<br><br>Ocorreram "+verificador_x+" mudancas no eixo X";
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_y+" mudancas no eixo Y";
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_z+" mudancas no eixo Z";
		document.getElementById('status').innerHTML += "<br><h2>-----§-----<h2>";
	}
	function verificacao(){
		var eixo_x = localStorage.getItem("x") - localStorage.getItem("accel_x"+1);
		var eixo_y = localStorage.getItem("y") - localStorage.getItem("accel_y"+1);
		var eixo_z = localStorage.getItem("z") - localStorage.getItem("accel_z"+1);
		
			if ( eixo_x > '1' || eixo_x < '-1') {
				var x = 1;
			}
			if (eixo_y > '1' || eixo_y < '-1') {
				var y = 1;
			}
			if ( eixo_z > '1' || eixo_z < '-1') {
				var z = 1;
			}
			
			if ( x == 0 && y == 0 && z == 0){
				document.getElementById('status').innerHTML += "Sem movimento";
				setTimeout(accelerometer, 800);
			}	
			else
			{
				document.getElementById('status').innerHTML += "O dispositivo mudou de posiçao.";
				contador++;
				accelerometer();
			}
	}
	function movimento(){
		for (primeiro = 1; primeiro < 5; primeiro++){
				var segundo = primeiro+1; 
				
				var ddp_x = localStorage.getItem("accel_x"+primeiro) - localStorage.getItem("accel_x"+segundo);
				var ddp_y = localStorage.getItem("accel_y"+primeiro) - localStorage.getItem("accel_y"+segundo);
				var ddp_z = localStorage.getItem("accel_z"+primeiro) - localStorage.getItem("accel_z"+segundo);
			
				if (ddp_x > '3' || ddp_x < '-3'){	
					verificador_x++;
				}
				if (ddp_y > '3' || ddp_y < '-3'){	
					verificador_y++;
				}
				if (ddp_z > '3' || ddp_z < '-3'){	
					verificador_z++;
				}
			}
		
		document.getElementById('status').innerHTML += "<br><br>Ocorreram "+verificador_x+" mudancas no eixo X";
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_y+" mudancas no eixo Y";
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_z+" mudancas no eixo Z";
		document.getElementById('status').innerHTML += "<br><h2>-----§-----<h2>";
		
		result();
	}
	function result(){
		
	} */
	