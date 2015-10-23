var app = {			
	onSuccess: function(acceleration) {
		alert('Acceleration X: ' + acceleration.x + '\n' +
			  'Acceleration Y: ' + acceleration.y + '\n' +
			  'Acceleration Z: ' + acceleration.z + '\n' +
			  'Timestamp: '      + acceleration.timestamp + '\n');
			},

	onError: function() {
		alert('Error!');
			}		
	};			
	function teste(){ 
		alert('1');
		navigator.accelerometer.getCurrentAcceleration(app.onSuccess, app.onError);
		alert('2');
	}