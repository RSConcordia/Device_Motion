var app = {			
	
	};

	var inicial = 0;
	var contador = 0;	
	
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
		
		if(inicial == 0){
			
			document.getElementById('x').value = accel_x; 
			document.getElementById('y').value = accel_y;
			document.getElementById('z').value = accel_z;
			document.getElementById('status').innerHTML = "Aguardando...";
			setTimeout(accelerometer, 500);	
			inicial = 1;
		}
		else 
		{			
			var x =	document.getElementById('x').value; 
			var y =	document.getElementById('y').value;
			var z =	document.getElementById('z').value;
		
			if(accel_x != x){
				if(accel_y != y || accel_z != z){
					start();
				}
				else
				{
					setTimeout(accelerometer, 500);	
				}
			}
			if(accel_y != y){
				if(accel_x != x || accel_z != z){
					start();
				}
				else
				{
					setTimeout(accelerometer, 500);	
				}
			}			
			if(accel_z != z){
				if(accel_y != y || accel_x != x){
					start();
				}
				else
				{
					setTimeout(accelerometer, 500);	
				}
			}
		}
	}
	function error(){
		alert('Error!');
	}
	function start(){
		navigator.accelerometer.getCurrentAcceleration(motion_accel, error);		
	}
	function motion_accel(acceleration){
		var accel_x = acceleration.x;
		var acceleration_x = parseInt(accel_x); 
		
		var accel_y = acceleration.y;
		var acceleration_y =parseInt(accel_y); 
		
		var accel_z = acceleration.z;
		var acceleration_z = parseInt(accel_z); 
		
		if(contador < 5){
			var input_x = document.createElement("input");
				input_x.setAttribute("id", 'x'+contador);
				input_x.setAttribute("type", 'hidden');
				input_x.setAttribute("value", acceleration_x);
			document.getElementById('hidden').appendChild(input_x);
			
			var input_y = document.createElement("input");
				input_y.setAttribute("id", 'y'+contador);
				input_x.setAttribute("type", 'hidden');
				input_y.setAttribute("value", acceleration_y);
			document.getElementById('hidden').appendChild(input_y);
			
			var input_z = document.createElement("input");
				input_z.setAttribute("id", 'z'+contador);
				input_x.setAttribute("type", 'hidden');
				input_z.setAttribute("value", acceleration_z);
			document.getElementById('hidden').appendChild(input_z);
			
			contador++;
			setTimeout(star, 500);
		}
		else
		{		
			certificacao();
		}
	}
	function certificacao(){		
		for(i = 0; i < 5; i++){
			var x = document.getElementById('x'+i).value;
			var y = document.getElementById('y'+i).value;
			var z = document.getElementById('z'+i).value;
			
			document.getElementById().innerHTML += "<br>X "+x+"<br>Y "+y+"<br>Z "+z+"<br>____________§___________";
		}	
	}
	
	
	
	
	
	
	
	
	
	
	