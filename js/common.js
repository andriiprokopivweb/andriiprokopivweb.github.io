document.body.onload = function(){
	setTimeout(function(){
		var preloader	=	document.getElementById("page-preloader");
		if(!preloader.classList.contains("preloader-done")){
			preloader.classList.add("preloader-done");
		}
		setTimeout(function(){
			var logo	=	document.getElementsByClassName("logo");
			logo[0].classList.add("move");
		},100);
	}, 1000)
};

var burgerMenu = document.getElementById("burger");
var navMenu = document.getElementsByClassName("navigation");

burgerMenu.onclick = function(){
		burgerMenu.classList.toggle("active-burger");
		navMenu[0].classList.toggle("active-menu");
}

var home = document.getElementById("home-id");
var portfolio = document.getElementById("portfolio-id");
var info = document.getElementById("info-id");

var partLinks = document.getElementsByClassName("part-links");
var part = document.getElementsByClassName("part");

partLinks[0].onclick = function(){
	removeClasses();
	home.classList.add("part-active");
	partLinks[0].classList.add("active-link");
}

partLinks[1].onclick = function(){
	removeClasses();
	portfolio.classList.add("part-active");
	partLinks[1].classList.add("active-link");
}

partLinks[2].onclick = function(){
	removeClasses();
	info.classList.add("part-active");
	partLinks[2].classList.add("active-link");
}


function removeClasses(){
	for(var i=0;i<partLinks.length;i++){
		partLinks[i].classList.remove("active-link")
		part[i].classList.remove("part-active");
	}
}