$(function () { 
    $("#mainnavToggle").click(function (event) {
      var screenWidth = window.innerWidth;
      if (screenWidth < 992) {
        if ( document.getElementById("mainnav-container").className.match(/(?:^|\s)mn-show(?!\S)/) ) {
            console.log("Show is in mainnav");
            document.getElementById("mainnav-container").className = document.getElementById("mainnav-container").className.replace( /(?:^|\s)mn-show(?!\S)/g , '' )
        } else {
            console.log("Show is not in mainnav");
            document.getElementById("mainnav-container").className += " mn-show";
        }
      }
    });
  });