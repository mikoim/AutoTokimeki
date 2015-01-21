chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			autoTokimeki();
		}
	}, 5000);
});

var page_id = 'vmu0002';

function checkTime() {
	var last = localStorage.getItem("lastLoad");
	
	if (Math.round(new Date().getTime() / 1000.0) - last > 3600) {
		localStorage.setItem("lastLoad", Math.round(new Date().getTime() / 1000.0));
		window.location.reload();
	}
	
	console.log("checkTime() : loop " + String(3600 - (Math.round(new Date().getTime() / 1000.0) - last)));
	setTimeout(checkTime, 60000);
}

function tokimeki() {
	myPoint = document.getElementById(page_id + '_tokimeki_btn_count').innerHTML;
	
	if (myPoint > 0) {
		document.getElementById('vmu0002_tokimeki_btn').click();
		console.log("tokimeki() : ToKiMeKi!");
		
		setTimeout(tokimeki, 5000 + Math.floor(Math.random() * 10000));
	}
}

function autoTokimeki() {
	var keys = ['last'];

	var last = localStorage.getItem("lastLoad");
	var myPoint = document.getElementById(page_id + '_tokimeki_btn_count').innerHTML;

	if (last == null) {
		localStorage.setItem("lastLoad", Math.round(new Date().getTime() / 1000.0));
	};

	tokimeki();

	checkTime();
}
