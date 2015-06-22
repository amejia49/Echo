Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.route('/', {name: 'home'});

Router.route('/friendsList', {
	name: 'friendsList'
})

Router.route('/startTime',{
	name: 'startTime'
})

Router.route('/endTime',{
	name: 'endTime'
})

Router.route('/selectPeople',{
	name: 'selectPeople'
})

Router.route('/displayMatches',{
	name: 'displayMatches'
})

Router.route('/messages',{
	name: 'messages'
})