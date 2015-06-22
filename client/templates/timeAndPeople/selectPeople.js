var invitedFriends = [];


Template.selectPeople.rendered = function (){

	$('.collapsible').collapsible({
    	accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    	var friends= Meteor.user().friends;
		Session.set('friends', Meteor.user().friends)
}


Template.selectPeople.helpers({
	'friend': function(){
		console.log(Meteor.user())
	
		return Session.get('friends');
	}
		
})


Template.selectPeople.events({
	'click .checked': function(e){

		if(invitedFriends.indexOf(e.target.id) === -1)
			{
				invitedFriends.push(e.target.id);
				console.log('Friend Added')
			}
		else{
			invitedFriends.splice(invitedFriends.indexOf(e.target.id,1))
			console.log('Friend Removed')
		}

	},

	'click #findFriendsBut': function(){
		var activity = Session.get('activity');
		console.log('invitedFriends are', invitedFriends)
		Meteor.call('createEvent',activity,invitedFriends, function(error, results){
			if(error)
				{console.log('couldnt create event', error)}
			else{
				console.log('results Creating Event')
				// people = Meteor.users.find({status: activity, desiredCrew: Meteor.user()._id}).fetch();
				// console.log('People are' ,people)
				// Session.set('people', people);
				Router.go('displayMatches');

			}

		})
	}
})

