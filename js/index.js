
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
			document.getElementById('status').innerHTML += "<br>"+contador+"<br>X "+accel_x+"<br>Y "+accel_y+"<br>Z "+accel_z+"<br>------------<br>";
			contador++;
			setTimeout(start, 3000);
		}
		else
		{		
			document.getElementById('status').innerHTML += "<br>...";
		}
	}
	function error(){
		alert('Error!');
	}
	