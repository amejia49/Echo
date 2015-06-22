Template.displayMatches.rendered = function(){

	Tracker.autorun(function(){
	var activity = Session.get('activity')
	console.log('user id is', Meteor.user()._id)
	var people = Meteor.users.find({status: activity, desiredCrew: Meteor.user()._id}).fetch();
	console.log('people are', people)
	 Session.set('crew', people)

})


}



Template.displayMatches.helpers({
	'foundCrewMember': function(){
		return Session.get('crew')

	}
})

Template.displayMatches.events({
	'click button': function(){

		Meteor.call('createSquad', function(error,success){
			if(error)
				return error
			else
				console.log('success')
		})
		// Messages.insert({message:Meteor.user().username+" just entered the room"})
		 Router.go('home')
	}
})