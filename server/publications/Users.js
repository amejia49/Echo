Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find();
  } else {
    this.ready();
  }
});

Meteor.publish("notifications", function() {

	return Notifications.find({status:"pending"});
});

Meteor.publish("messages", function() {
	return Messages.find({});
})