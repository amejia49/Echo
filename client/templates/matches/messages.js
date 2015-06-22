Template.messages.helpers({
    messages: function() {
	    Meteor.subscribe('messages');
		return Messages.find({});
	}
})