var app = {			
	
	};
	var contador = 0;	
	var verificador_x = 0;
	var verificador_y = 0;
	var verificador_z = 0;
	var verificador_c = 0;
	var bloco = 1;
	
	function start(){
	//document.getElementById('status').innerHTML = "";
		
		contador = 0;	
		verificador_x = 0;
		verificador_y = 0;
		verificador_z = 0;
		verificador_c = 0
		
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
		
		if(contador < 5 ){
				localStorage.setItem("accel_x"+contador, accel_x);
				localStorage.setItem("accel_y"+contador, accel_y);
				localStorage.setItem("accel_z"+contador, accel_z);
				
				document.getElementById('status').innerHTML += "<br><h2>"+bloco+"º Bloco<h2>";
				document.getElementById('status').innerHTML += "<br><h2>-"+contador+"-</h2><br>X - "+accel_x+"<br>Y - "+accel_y+"<br>Z - "+accel_z;
				
				setTimeout(accelerometer, 800);
			} 
			else
			{
				verificacao();
			}
	}
	function compass(){
		navigator.compass.getCurrentHeading(onSuccess, onError);
	}	
	function onSuccess(heading) {
		var compass = heading.magneticHeading;
		var compass = parseInt(compass); 
		
		localStorage.setItem("compass"+contador, compass);
		contador++;
		setTimeout(accelerometer, 800);
	}
	function error(){
		alert('Error!');
	}
	function onError(compassError) {
		alert('Compass error: ' + compassError.code);
	}
	function verificacao(){
		for (primeiro = 0; primeiro < 4; primeiro++){
				var segundo = primeiro+1; 
		
			//--ddp -> diferença de posição
				
				var ddp_x = localStorage.getItem("accel_x"+primeiro) - localStorage.getItem("accel_x"+segundo);
				var ddp_y = localStorage.getItem("accel_y"+primeiro) - localStorage.getItem("accel_y"+segundo);
				var ddp_z = localStorage.getItem("accel_z"+primeiro) - localStorage.getItem("accel_z"+segundo);
			//	var ddp_c = localStorage.getItem("compass"+primeiro) - localStorage.getItem("compass"+segundo);
			
				if (ddp_x > '3' || ddp_x < '-3'){	
					verificador_x++;
				}
				if (ddp_y > '3' || ddp_y < '-3'){	
					verificador_y++;
				}
				if (ddp_z > '3' || ddp_z < '-3'){	
					verificador_z++;
				}
			//	if(ddp_c > '70' || ddp_c < '-70'){
			//		verificador_c++;
			//	}
			}
		
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_x+" mudancas no eixo X";
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_y+" mudancas no eixo Y";
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_z+" mudancas no eixo Z";
		//document.getElementById('status').innerHTML += "<br>Compass teve "+verificador_c+" mudancas de 70º";
		document.getElementById('status').innerHTML += "<br><h2>-----§-----<h2>";
		
		result();
	}
	function result(){
		if (verificador_x > 1 && verificador_y > 1 && verificador_z > 1 && verificador_c > 1){
			document.getElementById('status').innerHTML += "<br><h2>"+bloco+"º Bloco ocorreu uma mudança intensa.<h2>";
		}
		else 
		{
			bloco++;
			start();
		}
	}
	