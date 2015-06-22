Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user())
        var name = Meteor.user().username;
      else
        var name = 'Anonymous';
      var message = document.getElementById('message');
 
      if (message.value != '') {
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now(),
        });
 
        document.getElementById('message').value = '';
        message.value = '';
      }
    }
    Tracker.flush();
  }
}