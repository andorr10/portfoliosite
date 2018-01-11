// Document Ready
$( document ).ready(function() {

	// AOS Transition Time
	AOS.init({
	  duration: 1200,
	});


}); //end document ready



//------------------------------  Modal Logic   ------------------------------------//
// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];


document.getElementById("myID").onclick = function() {
    document.getElementById('myModal').style.display = "block";
};

document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById('myModal').style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        document.getElementById('myModal').style.display = "none";
    }
};
