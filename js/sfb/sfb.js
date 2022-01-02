/* sfb.js */

var sfb = {
	log: function(s1, s2) {
		if (typeof(window.console) != "undefined") {
			if (s2) {
				console.log([s1, s2]);
			} else {
				console.log(s1);
			}
		}
	},

	init: function() {
		sfb.render();
		$(".sfb-calc-dependency").on("change", sfb.render);
	},
	
	render: function() {
		var advantage = 0;
		var die = parseInt($("#sfb-die-roll").val(),10);
		advantage += die;
		//console.log(die + "/" + advantage);

		var rating = parseInt($("#sfb-pilot-rating").val(),10);
		advantage += rating;
		//console.log(rating + "/" + advantage);
		
		var dogFightRating = parseInt($("#sfb-dog-fighting").val(),10);
		advantage += dogFightRating;
		//console.log(dogFightRating + "/" + advantage);		

		var speedRating = parseInt($("#sfb-speed-rating").val(),10);
		advantage += speedRating;
		//console.log(speedRating + "/" + advantage);	

		var secondShuttle = parseInt($("#sfb-second-shuttle").val(),10);
		advantage += secondShuttle;
		//console.log(secondShuttle + "/" + advantage);	
		
		var attemptingToSeparate = parseInt($("#sfb-attempt-to-separate").val(),10);
		advantage += attemptingToSeparate;
		//console.log(attemptingToSeparate + "/" + advantage);	
		
		var previousAdvantage = parseInt($("#sfb-previousAdvantage").val(),10);
		advantage += previousAdvantage;
		//console.log(previousAdvantage + "/" + advantage);	
		
		var damaged = parseInt($("#sfb-damaged").val(),10);
		advantage += damaged;
		//console.log(damaged + "/" + advantage);	

		var twoSeater = parseInt($("#sfb-two-seater").val(),10);
		advantage += twoSeater;
		//console.log(twoSeater + "/" + advantage);	

		$("#sfb-advantage").html(advantage);
	}
};

$(document).ready(sfb.init);
