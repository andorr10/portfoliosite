// Document Ready
$( document ).ready(function() {

	// AOS Transition Time
	AOS.init({
	  duration: 1200,
	});


}); //end document ready



//------------------------------  Modal Logic   ------------------------------------//
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
