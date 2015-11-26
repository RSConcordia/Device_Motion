var app = {			
	
	};
	var loop = 0;	
	var contador = 0;
	var soma_eixo = 0;
	var eixo = [""];
	var vetor = [""];
	var anterior = false;
	
	
	function start(){ 
		document.getElementById("status").innerHTML = "";
		
		loop = 0;	
		contador = 0;
		soma_eixo = 0;
		eixo = [""];
		vetor = [""];
		anterior = false;
		
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
		
		if(loop < 50){			
			document.getElementById("status").innerHTML += "<br><h2>"+loop+"</h2>"; 		
			var eixo += accel_x + accel_y + accel_z;
			document.getElementById("status").innerHTML += "<br>Eixo "+ eixo[loop]; 		
			soma_eixo = soma_eixo + eixo[loop];
			
			loop++;
			setTimeout(accelerometer, 100);	
		}
		else
		{			
			document.getElementById("status").innerHTML += "<br><h2>---§----</h2><br>"; 
			document.getElementById("status").innerHTML += "<br>Soma de Todos os Eixos "+ soma_eixo; 
			vetor();
		}
	}
	function error(){
		alert('Error!');
	}
	function vetor(){
		var media = soma_eixo / 50;
		var media = parseInt(media);
		document.getElementById("status").innerHTML += "<br>Media dos Eixos "+ media+"<br>"; 
		for (i = 0; i < 50; i++){	
			var vetor = eixo[i] - media;
			var vetor += parseInt(vetor);
			
			document.getElementById("status").innerHTML += "<h2>Vetores</h2><br>"; 
			document.getElementById("status").innerHTML += "/"+ vetor; 
			
			if(!anterior){
				if(vetor > "0"){
					contador++;
					anterior = true;					
				}
				else
				{
					anterior = false;
				}
			}
			else 
			{
				if(vetor < "0") {
					anterior = false; 
				}
			}  
		} 
		
		frequencia = contador / 5;
		
		document.getElementById("status").innerHTML += "<br><h2>Result</h2><br>Frequência "+ frequencia; 		
	}