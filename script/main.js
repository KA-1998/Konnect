var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 5000);
} 

function myDrop()
{
    var x = document.getElementById("myNav");
    var y = document.getElementById("myNavDrop");
	
	var b = document.getElementById("ham");
	var l = document.getElementById("bur");
	var k = document.getElementById("ger");
	
    if (x.className === "navtop" && y.className === "navtopdrop") {
        x.className += " resp";
        y.className += " resp";
		b.className = "blck";
		l.className = "blck";
		k.className = "blck";		
    } else {
        x.className = "navtop";
        y.className = "navtopdrop";

    }
}

function myDrop2()
{
    var x = document.getElementById("myNav");
    var y = document.getElementById("myNavDrop");
	
	var w = document.getElementById("ham");
	var h = document.getElementById("bur");
	var t = document.getElementById("ger");
	
	x.className = "navtop";
	y.className = "navtopdrop";
	
	w.className = "wht";
	h.className = "wht";
	t.className = "wht";
}


function whiten()
{
	var x = document.getElementById("myNav");
    var y = document.getElementById("myNavDrop");
	
	var w = document.getElementById("ham");
	var h = document.getElementById("bur");
	var t = document.getElementById("ger");
	
	if (x.className === "navtop resp" && y.className === "navtopdrop resp") {
		
	} else {
		w.className = "wht";
		h.className = "wht";
		t.className = "wht";
	}
}

function blacken()
{	
	var b = document.getElementById("ham");
	var l = document.getElementById("bur");
	var k = document.getElementById("ger");
	
	b.className = "blck";
	l.className = "blck";
	k.className = "blck";	
}


