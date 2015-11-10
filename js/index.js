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
			inicial = 1;
			setTimeout(accelerometer, 500);
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
					document.getElementById('status').innerHTML = inicial;
					inicial++;
					setTimeout(accelerometer, 500);	
				}
			}
			if(accel_y != y){
				if(accel_x != x || accel_z != z){
					start();
				}
				else
				{
					document.getElementById('status').innerHTML = inicial;
					inicial++;
					setTimeout(accelerometer, 500);	
				}
			}			
			if(accel_z != z){
				if(accel_y != y || accel_x != x){
					start();
				}
				else
				{
					document.getElementById('status').innerHTML = inicial;
					inicial++;
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
		var x = parseInt(accel_x); 
		
		var accel_y = acceleration.y;
		var y =parseInt(accel_y); 
		
		var accel_z = acceleration.z;
		var z = parseInt(accel_z); 
		
		if(contador < 5){			
			document.getElementById('status').innerHTML += "<br>"+contador+"<br>X "+x+"<br>Y "+y+"<br>Z "+z+"<br>------§------<br>";
			contador++;
			setTimeout(start, 3000);
		}
		else
		{		
			inicial = 0;
			contador = 0;	
		}
	}
	
	
	
	
	
	
	
	
	
	
	