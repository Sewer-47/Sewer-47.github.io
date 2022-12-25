var button = document.getElementById("back-to-top");
button.addEventListener("click", handleClick);

window.addEventListener("scroll", handleScroll);

function handleClick() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}

function handleScroll() {
	if (window.scrollY > 150) {
		button.classList.remove("d-none");
	} else {
		button.classList.add("d-none");
	}
}
