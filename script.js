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
	// var d = document.getElementById("div1");
	// d.className += "row";
	for (let i = 0; i <= 71; i++) {
		var divRow = document.createElement("div");
		divRow.classList.add("row");
		document.body.appendChild(divRow);
		divRow.addEventListener("click", selectValue);
	}
	var all = document.querySelectorAll(".row");
	for (let i = 0; i < all.length; i++) {
		let colors = randomColor();
		all[i].style.backgroundColor = colors;
		all[i].innerText = colors;

		all[i].onmouseover = function logMouseOver() {
			all[i].style.textShadow = "-1px 0px 5px rgba(0,0,0,0.46)";
			all[i].style.boxShadow = " 0px 0px 8px 4px rgba(230, 230, 230,0.5)";
			all[i].style.cursor = "pointer";
		};
		all[i].onmouseout = function logMouseOver() {
			all[i].style.textShadow = "";
			all[i].style.boxShadow = "";
			all[i].style.cursor = "";
		};
	}
	var a = Array.from(all);
	console.log(a);

	function selectValue(event) {
		var range = document.createRange();
		range.selectNode(event.target);
		window.getSelection().removeAllRanges(); // clear current selection
		window.getSelection().addRange(range); // to select text
		document.execCommand("copy");
		//window.getSelection().removeAllRanges(); // to deselect
		event.target.innerText = "Copied";
		event.target.style.fontWeight = "600";
		event.target.style.fontSize = "1.2rem";
		event.target.style.color = "#fff";
	}
}

makedivRows();
