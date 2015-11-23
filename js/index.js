var app = {			
	
	};
	var loop = 0;	
	var contador = 0;
	var soma_media = 0;
	var anterior = false;
	
	function start(){
		document.getElementById('status').innerHTML = "";
		
		loop = 0;	
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
		
		if(loop < 50){			
			var soma_eixo = accel_x + accel_y + accel_z;
			soma_media = soma_media + soma_eixo;
			
			localStorage.setItem("soma_eixo_"+loop, soma_eixo);
	
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
		var media = soma_media / 50;
		
		for (i = 0; i < 50; i++){				
				var vetor = localStorage.getItem("soma_eixo_"+i) - media;				
				
				if(anterior == false){
					if(vetor > 0){
						contador++;
						anterior = true;					
					}
					else 
					{
						anterior = false;
					}
				}
		}
		frequencia = contador / 50;
	}
	