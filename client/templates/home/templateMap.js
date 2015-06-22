
Template.home.rendered = function(){
	L.mapbox.accessToken = 'pk.eyJ1IjoiYW1lamlhNDkiLCJhIjoiTG1sVzdmNCJ9.eWJ0IA1FWTCwDpF09jxQ6Q';

	var map = L.mapbox.map('mapBox','amejia49.mg4ia2g8',{
	    zoom: 12,
	    minZoom: 12
  });


  
	Tracker.autorun(function(){
		var crew = Session.get('crew');

		console.log('crew is', crew)
		if(crew !==undefined)
		crew.forEach(function(member){
			console.log(member);
			var marker = L.marker([member.coordinates[0], member.coordinates[1]], {
    		clickable: true,
   			 title: 'bob'
  			}).addTo(map);
  			marker.bindPopup("<button id='person'>"+member.username+"</button>").openPopup();

		})

	})
}

Template.home.events({
    'click a':function(e){
        var activity = e.currentTarget.id;
		Session.set('activity', activity)        
        Router.go('/startTime', activity)
    },

    'click #person':function(e){
    	console.log('clicked on person');
    }
})

