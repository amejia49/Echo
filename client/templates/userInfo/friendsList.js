Template.friendsList.events({
	'submit form': function(e){
		e.preventDefault();
		console.log('submittedd');
		var text = event.target.searchForUser.value;
				console.log(text);
		var user = Meteor.users.find({username: text}).fetch()
		console.log('user is', user)
		Session.set('foundUser',user)
	},
	'click #sendFriendRequestBut':function(e){
		console.log('the friend you are looking for is', this)
		Meteor.call('sendFriendRequest', this,function(error,result){
			if(error)
				console.log('Error is', error)
			else
				console.log('friend request sent')

		} )
	},
	'click #acceptFriendRequestBut':function(e){
		Meteor.call('acceptedFriendRequest',this, function(error, result){
			if(error)
				console.log('Error is', error)
			else
				console.log('You are Now friends')
		})
	}
})

Template.friendsList.helpers({
	'user': function(){
		return Session.get('foundUser');
	},

	'friendRequest': function(){
		Meteor.call('getFriendRequests',function(error, results){
			if (error)
				console.log('Couldnt get requests', error);
			else
				console.log('results are', results)
				Session.set('friendRequests', results)
		})

		return Session.get('friendRequests')
	}
})