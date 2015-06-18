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

	}
})