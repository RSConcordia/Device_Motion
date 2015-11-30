var app = {			
	
	};
	var loop = 0;	
	var contador = 0;
	var soma_eixo = 0;
	var media = 0;
	var array_eixo = new Array();
	var anterior = false;
	
	
	function start(){ 
		document.getElementById("status").innerHTML = "";
		
		loop = 0;	
		contador = 0;
		soma_eixo = 0;
		media = 0;
		array_eixo = new Array();
		anterior = false;
		
		accelerometer();
	}		
	function accelerometer(){ 
		navigator.accelerometer.getCurrentAcceleration(motion, error);
	}
	function error(){
		alert('Error!');
	}
	function motion(acceleration){
		var x = acceleration.x;
		var x_int = Math.round(x);
		var accel_x = Math.pow(x_int, 2);
		
		var y = acceleration.y;
		var y_int = Math.round(y);
		var accel_y = Math.pow(y_int, 2);
		
		var z = acceleration.z;
		var z_int = Math.round(z);
		var accel_z = Math.pow(z_int, 2);
		
		if(loop < 50){			
			document.getElementById("status").innerHTML = "<br><h2>"+loop+"</h2>"; 		
	
			var xyz = accel_x + accel_y + accel_z;
			var xyzSqrt = Math.sqrt(xyz);
			var eixo = Math.round(xyzSqrt);
			array_eixo.push(eixo);
		//	document.getElementById("status").innerHTML += "<br>xyz "+ xyz; 	
		//	document.getElementById("status").innerHTML += "<br>Eixo "+ eixo; 	
			
			soma_eixo = soma_eixo + eixo;
			loop++;
			setTimeout(accelerometer, 100);	
		}
		else
		{			
	//	document.getElementById("status").innerHTML += "<br><h2>---§----</h2><br>"; 
		document.getElementById("status").innerHTML = "<br>Soma de Todos os Eixos "+ soma_eixo; 
		
		var m = soma_eixo / 50;
		media = Math.round(m);
		document.getElementById("status").innerHTML += "<br>Media dos Eixos "+ media+"<br>"; 
		document.getElementById("status").innerHTML += "<h2>Vetores</h2><br>"; 
		
		for (i = 0; i < 50; i++){	
			var v = array_eixo[i] - media;
			var vetor = Math.round(v);
			
			document.getElementById("status").innerHTML +=  vetor+"/"; 
			
			if(!anterior){
				if(vetor > 1){
					document.getElementById("status").innerHTML +=  "<br>"+vetor+"/ contador = "+contador; 
					contador++;
					anterior = true;					
				}
			}
			else 
			{
				if(vetor <= 0) {
					anterior = false; 
				}
			}  
		} 
		frequencia = contador / 5;
		
		document.getElementById("status").innerHTML += "<br><h2>Result "+contador+"</h2><br>Frequência "+ frequencia; 	
		}
	}