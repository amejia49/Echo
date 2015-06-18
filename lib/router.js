Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'introPage'});

Router.route('/friendsList', {
	name: 'friendsList'
})

