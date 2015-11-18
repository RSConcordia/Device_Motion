var app = {			
	
	};
	var contador = 0;	
	var verificador_x = 0;
	var verificador_y = 0;
	var verificador_z = 0;
	var verificador_c = 0;
	var string = 0;
	var string_eixo = 0;
	
	function start(){
		document.getElementById('status').innerHTML = "";
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
				
				document.getElementById('status').innerHTML 
				var string_eixo += "<br><h2>-#"+contador+"-</h2><br>X - "+accel_x+"<br>Y - "+accel_y+"<br>Z - "+accel_z;
				
				compass();
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
		var string += string_eixo+"<br> Compass - "+compass+"<br><h2>-----§-----<h2>";
		contador++;
		setTimeout(accelerometer, 1000);
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
				var ddp_c = localStorage.getItem("compass"+primeiro) - localStorage.getItem("compass"+segundo);
				
			/*	document.getElementById('status').innerHTML += "<br>"+segundo;
				document.getElementById('status').innerHTML += "<br>Ddp  "+ddp_x+" no eixo X";
				document.getElementById('status').innerHTML += "<br>Ddp  "+ddp_y+" no eixo Y";
				document.getElementById('status').innerHTML += "<br>Ddp  "+ddp_z+" no eixo Z";
				document.getElementById('status').innerHTML += "<br>Ddp Compasso "+ddp_c+" no eixo Z";
				document.getElementById('status').innerHTML += "<br>______________________"; */
			
				if (ddp_x > '4' || ddp_x < '-4'){	
					verificador_x++;
				}
				if (ddp_y > '4' || ddp_y < '-4'){	
					verificador_y++;
				}
				if (ddp_z > '4' || ddp_z < '-4'){	
					verificador_z++;
				}
				if(ddp_c > '65' || ddp_c < '-65'){
					verificador_c++;
				}
			}
		
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_x+" mudancas no eixo X";
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_y+" mudancas no eixo Y";
		document.getElementById('status').innerHTML += "<br>Ocorreram "+verificador_z+" mudancas no eixo Z";
		document.getElementById('status').innerHTML += "<br>Compass teve "+verificador_c+" mudancas de 70º";
		document.getElementById('status').innerHTML += "<br><button onclick='relatorio()'>Relatorio</button>";
		
		result();
	}
	function result(){
	//	if (verificador_x > 2 && verificador_y > 2 || verificador_z > 2 && verificador_y > 2 || verificador_x > 2 && verificador_z > 2 ){
			
			
		
		contador = 0;	
		verificador_x = 0;
		verificador_y = 0;
		verificador_z = 0;
		verificador_c = 0
	}
	function relatorio(){
			document.getElementById('relatorio').innerHTML += string;
	}
	