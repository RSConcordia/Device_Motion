var app = {			
	
	};
	var loop = 0;	
	var contador = 0;
	var soma_media = 0;
	var anterior = false;
	var teste = 0;
	
	
	function start(){ 
	//	document.getElementById("status").innerHTML = "";
		loop = 0;	
		contador = 0;
		soma_media = 0;
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
		
		if(loop < 10){			
			var soma_eixo = accel_x + accel_y + accel_z;
			soma_media = soma_media + soma_eixo;
			
			localStorage.setItem("soma_eixo_"+loop, soma_eixo);
			
		//	document.getElementById("status").innerHTML = "<br><h2> "+ loop+"</h2>";
		//	document.getElementById("status").innerHTML += "<br>soma eixo "+ soma_eixo;
		//	document.getElementById("status").innerHTML += "<br>soma media "+ soma_media;
		//	document.getElementById("status").innerHTML += "<br><h2>---§---</h2>";
			
			loop++;
			setTimeout(accelerometer, 100);	
		}
		else
		{			
			vetor();
		}
	}
	function error(){
		alert('Error!');
	}
	function vetor(){
		var media = soma_media / 10;
	//	document.getElementById("status").innerHTML += "<br>Media "+ media;	
		for (i = 0; i < 10; i++){				
			var eixo = localStorage.getItem("soma_eixo_"+i);
			var vetor = eixo - media;	
			
		//	document.getElementById("status").innerHTML += "<br><h2>---"+ i+"---</h2>";								
		//	document.getElementById("status").innerHTML += "<br>Eixo "+ eixo;				
		//	document.getElementById("status").innerHTML += "<br>Vetor "+ vetor;				
		//	document.getElementById("status").innerHTML += "<br>";				
		
			if(!anterior){
				if(vetor >= 1){
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
				anterior = false;
			}  
		} 
		
		frequencia = contador / 10;
		
		document.getElementById("status").innerHTML += "<br><h2>Result</h2>";
		document.getElementById("status").innerHTML += "<br>Contador "+ contador;
		document.getElementById("status").innerHTML += "<br>Frequência "+ frequencia;
		
		if(teste < 4){
			teste++;
			start();
		}
		
	}
	