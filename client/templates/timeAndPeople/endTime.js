Template.endTime.helpers({
	currentTime: function(){

		return new Date().getHours();
	},
	endTime: function(){

		}
})

Template.endTime.events({

	'submit form': function(e){
		e.preventDefault();

		var hourInput = e.target.hour.value;
		var minuteInput = e.target.minute.value;

		console.log('hour is', e.target.hour.value);
		console.log('minute is', e.target.minute.value);
		console.log('minute is', e);


		var time =moment().hour(hourInput).minute(minuteInput);

		Session.set('endTime', time);
		Router.go('/selectPeople');
	}
})



