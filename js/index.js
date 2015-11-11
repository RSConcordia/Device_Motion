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
		
		if(contador < 5){
				localStorage.setItem("accel_x"+contador, accel_x);
				localStorage.setItem("accel_y"+contador, accel_y);
				localStorage.setItem("accel_z"+contador, accel_z);
				
				document.getElementById('status').innerHTML += "<br>contador "+contador+"<br>X - "+accel_x+"<br>Y - "+accel_y+"<br>Z - "+accel_z+"<br>----------";
				
				contador++;
				setTimeout(accelerometer, 3000);
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
				if (localStorage.getItem("accel_x"+primeiro) != localStorage.getItem("accel_x"+segundo)){	
					verificador_x++;
				}
				if (localStorage.getItem("accel_y"+primeiro) != localStorage.getItem("accel_y"+segundo)){	
					verificador_y++;
				}
				if (localStorage.getItem("accel_z"+primeiro) != localStorage.getItem("accel_z"+segundo)){	
					verificador_z++;
				}
			}
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_x+" mudancas no eixo X";
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_y+" mudancas no eixo Y";
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_z+" mudancas no eixo Z";
	}
	function (){
		if (verificador_x > 2 && verificador_y > 2 || verificador_z > 2 && verificador_y > 2 || verificador_x > 2 && verificador_z > 2 ){
				document.getElementById('status').innerHTML += "<br>O dispositivo mudou de posicao";
			}
			else
			{
				document.getElementById('status').innerHTML += "<br>O dispositivo nao mudou de posicao.";
			}
	}
	