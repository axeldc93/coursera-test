// Hide & Show main navigation menu using toggle
$(function () { 
    $("#mainnavToggle").click(function (event) {
        if ( document.getElementById("mainnav-container").className.match(/(?:^|\s)d-none(?!\S)/) ) {
            document.getElementById("mainnav-container").className = document.getElementById("mainnav-container").className.replace( /(?:^|\s)d-none(?!\S)/g , '' )
        } else {
            document.getElementById("mainnav-container").className += " d-none";
            }
      });
  });