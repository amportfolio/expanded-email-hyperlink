// Functionality for email links
// The goal is on desktop you click and it copies the email address to your clipboard,
// and on mobile it acts as a mailto and opens your default email app.
//
function emailHandler(element) {
  // Checking to see if you're on a mobile device
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // Stop the link action and instead make the link a mailto.
    $("#emailLink").addClass('mobileEmailLink');
    event.preventDefault();
    var email = 'name@email.com';
    window.location = 'mailto:' + email;
  } else {
    // Detecting the designated element and copying the email address from it.
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    $("#emailLink").attr('tooltip-content','My email address is in your clipboard.');
    $("#emailLink").mouseleave(function(){
      $("#emailLink").attr('tooltip-content','Click to copy my email address to your clipboard.');
    });
  }
}