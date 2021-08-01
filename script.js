
var settingsmenu=document.querySelector(".settings-menu");
var darkbtn=document.getElementById("dark-btn");
function settingsMenuToggle(){
	settingsmenu.classList.toggle("settings-menu-height");
}
darkbtn.onclick=function(){
	darkbtn.classList.toggle("dark-btn-on");
	document.body.classList.toggle("dark_theme");
	if (localStorage.getItem("theme")=="light") {
		localStorage.setItem("theme","dark");
	}
	else{
		localStorage.setItem("theme","light");
	}
}

if (localStorage.getItem("theme")=="light") {
	darkbtn.classList.remove("dark-btn-on");
	document.body.classList.remove("dark_theme");
}
else if (localStorage.getItem("theme")=="dark") {
	darkbtn.classList.add("dark-btn-on");
	document.body.classList.add("dark_theme");
}
else{
    localStorage.setItem("theme","light");
}

