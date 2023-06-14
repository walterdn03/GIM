function Clock(instagramAccount, tiktokAccount) {
	this.instagramAccount = instagramAccount;
	this.tiktokAccount = tiktokAccount;
  
	this.getTime = function() {
	  // Get the current time in milliseconds.
	  var now = new Date();
	  var time = now.getTime();
  
	  // Get the number of hours that the user has used Instagram.
	  var instagramHours = this.getInstagramHours(time);
  
	  // Get the number of hours that the user has used TikTok.
	  var tiktokHours = this.getTikTokHours(time);
  
	  // Return the total number of hours that the user has used social media.
	  return instagramHours + tiktokHours;
	};
  
	this.getInstagramHours = function(time) {
	  // Get the user's Instagram usage data.
	  var instagramData = this.getInstagramData(time);
  
	  // Get the total number of hours that the user has used Instagram.
	  var instagramHours = instagramData.hours;
  
	  // Return the number of hours.
	  return instagramHours;
	};
  
	this.getTikTokHours = function(time) {
	  // Get the user's TikTok usage data.
	  var tiktokData = this.getTikTokData(time);
  
	  // Get the total number of hours that the user has used TikTok.
	  var tiktokHours = tiktokData.hours;
  
	  // Return the number of hours.
	  return tiktokHours;
	};
  
	this.getInstagramData = function(time) {
	  // Make a request to the Instagram API to get the user's usage data.
	  var request = new XMLHttpRequest();
	  request.open("GET", "https://api.instagram.com/v1/users/self/usage?time=" + time);
	  request.onload = function() {
		// Check if the request was successful.
		if (request.status === 200) {
		  // Parse the JSON response.
		  var data = JSON.parse(request.responseText);
  
		  // Return the data.
		  return data;
		} else {
		  console.log("Error getting Instagram data.");
		}
	  };
	  request.send();
	};
  
	this.getTikTokData = function(time) {
	  // Make a request to the TikTok API to get the user's usage data.
	  var request = new XMLHttpRequest();
	  request.open("GET", "https://api.tiktok.com/v1/users/self/usage?time=" + time);
	  request.onload = function() {
		// Check if the request was successful.
		if (request.status === 200) {
		  // Parse the JSON response.
		  var data = JSON.parse(request.responseText);
  
		  // Return the data.
		  return data;
		} else {
		  console.log("Error getting TikTok data.");
		}
	  };
	  request.send();
	};
  }
  
  var clock = new Clock("your_instagram_account", "your_tiktok_account");
  
  // Update the clock every second.
  setInterval(function() {
	// Get the current time.
	var time = new Date();
  
	// Get the number of hours that the user has used social media.
	var hours = clock.getTime();
  
	// Update the clock.
	document.getElementById("clock").innerHTML = hours + " hours";
  }, 1000);
  