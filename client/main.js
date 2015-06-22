Meteor.startup(function(){
	console.log("hey")
	navigator.geolocation.getCurrentPosition(function(position){
		console.log('latitude is', position.coords.latitude)
		Session.set('lat', position.coords.latitude);
		Session.set('long', position.coords.longitude);

		Meteor.call('setCoordinates',Session.get('lat'),Session.get('long'), function(error,success){
			if(error)
				console.log('couldnt set coordinates')
			else
				console.log('success', success)
	})
	})
	
	Meteor.call('getGoogle', function(success,error){
		if(error)
			{console.log('error is,', error)}
		else{
			console.log('Slack peeps are', success)
		}
	})

	
})