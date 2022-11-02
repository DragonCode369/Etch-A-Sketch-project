const container = document.querySelector("#container");
const slider = document.getElementById("slider");
const sliderValue = document.querySelector(".current-value");

// Initial values
let grid = 16;
let divs;
let arrayDivs = [];

// Creating divs for grid-view, and setting background-color to black.
createGrid();

slider.addEventListener("input", () => {

	rangeValue();
	arrayDivs = [];

	createGrid();
	grid = slider.value;
	let divSize = (600/grid-2);
	container.style = `grid-template-columns: repeat(${grid}, ${divSize}px); grid-template-rows: repeat(${grid}, ${divSize}px);`

	arrayDivs.forEach((div) => {
		div.style.backgroundColor = "grey;";
	});
});

function createGrid() {

	for	(let i = 0; i < grid*grid; i++) {
		divs = document.createElement("div");
		divs.classList.add("divs");
		container.appendChild(divs);

		arrayDivs.push(divs);
	};

	arrayDivs.forEach((div) => {
		div.addEventListener("mouseenter", () => {
			div.style.backgroundColor = "#000";
		});
	});
};

let rangeValue = function() {
	let newValue = slider.value;	
	sliderValue.textContent = newValue;
};
