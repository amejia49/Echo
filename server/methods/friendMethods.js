Meteor.methods({

	sendFriendRequest: function(friend){
		Notifications.insert({
			user1:this.userId, user1name:Meteor.user().username, user2:friend._id, status:'pending'
		}, function(error){
			if(error)
				return "Failed to send notification from method"
			else
				return 
		})


	},

	getFriendRequests: function(){
		var friendRequests = Notifications.find({user2: this.userId}).fetch();

		return friendRequests
	},

	getMessages: function(){
		return Messages.find({}, { sort: { time: 1}}).fetch();
	
	},

	acceptedFriendRequest: function(friendRequestData){
		Meteor.users.update(Meteor.user(), {$addToSet: { friends: {username:friendRequestData.user1name, id: friendRequestData.user1}}}, function(error){
			if (error)
				return error
			else
			{	Meteor.users.update({_id:friendRequestData.user1}, {$addToSet:{friends: {username: Meteor.user().username, id: Meteor.user()._id}}},function(error){
					if (error)
						return error
					else
					{
						console.log('We all good!')
						Notifications.update(friendRequestData, {status:'Accepted'}, function(error){
							if (error)
								return error
							else
								console.log('Notifications updated')
									return
						})
					}
					
				})
			}
		})

	},

	createEvent:function(activity, invitedFriends){

		var people;
		console.log('User is', Meteor.user()._id)
	    Meteor.users.update(Meteor.user(), {$set:{status: activity, desiredCrew: invitedFriends}}, function(error){
			if (error)
				return error
			else
				{ 
					people = Meteor.users.find({status: activity, desiredCrew: Meteor.user()._id}).fetch();
					return 
				}
		});
		
	},

	setCoordinates:function(lat, longitude){
		console.log('this user id is', this.userId)
		Meteor.users.update(this.userId,{$set:{coordinates:[lat,longitude]}})
	},

	getGoogle: function(userId){
		this.unblock();
		try{
			var geo = new GeoCoder();
           var result = geo.geocode('Fullstack Academy, New York, New York');

			console.log('result is', result)
			return result;
		}

		catch(e){
			return "Not able to get it"
		}
	}
	
})