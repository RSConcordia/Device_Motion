var app = {			
	onSuccess: function(acceleration) {
		document.getElementById('status').innerHTML = 'Acceleration X: ' + acceleration.x + '\n' +
											  'Acceleration Y: ' + acceleration.y + '\n' +
											  'Acceleration Z: ' + acceleration.z + '\n' +
											  'Timestamp: '      + acceleration.timestamp;
				setTimeout(accelerometer, 1000);
			},
	onError: function() {
		alert('Error!');
			}		
	};			
	function accelerometer(){ 
		navigator.accelerometer.getCurrentAcceleration(app.onSuccess, app.onError);
	}