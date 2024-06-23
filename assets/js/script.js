$(document).ready(function(){

  $('.scroll-top').hide();

  /*--------------- Navbar Toggler ---------------*/
  $('#menu-btn').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('active');
  });

  /*--------------- Scroll-Top ---------------*/
  $(window).on('scroll',function(){
    
    $('#menu-btn').removeClass('fa-times');
    $('.navbar').removeClass('active');

    // STICKY HEADER
    if($(window).scrollTop() > 0){
      $(".header").addClass("sticky");
    }else{
      $(".header").removeClass("sticky");
    }

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

  });

});

//  Email sent msg ................
document.getElementById("contactUs-Form").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent the form from submitting normally

	// Get form values
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;

	// Perform form submission (simulated here using setTimeout)
	setTimeout(function() {
	  var isSuccess = true; // Simulate success or failure randomly

	  if (isSuccess) {
		alert("Your message has been sent!"); // Display success message
	  } else {
		alert("Error sending message. Please try again."); // Display error message
	  }
	}, 1000); // Simulate a delay of 1 second for form submission

	// Reset form fields
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("subject").value = "";
	document.getElementById("message").value = "";
  });

