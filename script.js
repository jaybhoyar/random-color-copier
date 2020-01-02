//  Random Color function
function randomColor() {
	let words = "ABCDEF0123456789".split("");
	let color = "#";
	for (i = 0; i < 6; i++) {
		color += words[Math.floor(Math.random() * 16)];
	}
	return color;
}
// Adding Random Colors to boxes
function makedivRows() {
	var d = document.getElementById("div1");
	d.className += "row";
	for (let i = 0; i <= 95; i++) {
		var divRow = document.createElement("div");
		divRow.className = "row";
		document.body.appendChild(divRow);
	}
	let all = document.querySelectorAll(".row");
	for (let i = 0; i < all.length; i++) {
		let colors = randomColor();
		all[i].style.backgroundColor = colors;
		all[i].innerHTML = colors;
		all[i].onmouseover = function logMouseOver() {
			all[i].style.textShadow = "-1px 0px 5px rgba(0,0,0,0.46)";
			all[i].style.boxShadow = " 0px 0px 8px 4px rgba(230, 230, 230,0.5)";
			all[i].style.cursor = "pointer";
			/* Select the text field */
		};
		all[i].onmouseout = function logMouseOver() {
			all[i].style.textShadow = "";
			all[i].style.boxShadow = "";
			all[i].style.cursor = "";
		};
	}
}
function copyCode() {
	/* Select the text field */
	var copyText = document.getElementById("div1");

	/* Select the text field */
	copyText.innerHTML.select();

	/* Copy the text inside the text field */
	document.execCommand("copy");
}
