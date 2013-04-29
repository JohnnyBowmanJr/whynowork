$(document).ready(function() {
	reasons = ["You never restarted your server, idiot.",
								"You think whitespace is a silly little game? It is not a silly little game.",
								"Those console warnings were trying to help you. But you spurned them.",
								"Indent your shit, fucktard.",
								"It's a shitty project that nobody gives a shit about. That's why.",
								"You can't copy and paste Stack Overflow answers when you're that dumb.",
								"That array has been empty THE ENTIRE TIME"
								];

	buttonText = ["That's only part of the problem",
								"OK, but why else doesn't this fucking work?",
								"Fixed that, and still no dice. Hit me.",
								"Yup, but I need another reason",
								"Sorry, my problems are bigger than that"
								]; 

	var randomReason = Math.floor(Math.random() * reasons.length);
	var randombuttonText = Math.floor(Math.random() * buttonText.length);
	$('#reason').append(reasons[randomReason]);
	$('button#inquire').append(buttonText[randombuttonText]);

	$('body').on("click", "#inquire", function() {
		var randomReason = Math.floor(Math.random() * reasons.length);
		var randombuttonText = Math.floor(Math.random() * buttonText.length);
		$('#reason').replaceWith("<div id='reason'>" + reasons[randomReason] + "</div>");
		$('button#inquire').replaceWith("<button id='inquire'>" + buttonText[randombuttonText] + "</button>");
		console.log(randomReason);
	});
});
