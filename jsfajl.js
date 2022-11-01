const container = document.querySelector("#container");
const button = document.getElementById("btn");

// Starting values
let grid = 16;
let divs;
let arrayDivs = [];

// Creating divs for grid-view
for	(let i = 0; i < grid*grid; i++) {
	divs = document.createElement("div");
	divs.classList.add("divs");
	container.appendChild(divs);

	arrayDivs.push(divs);
};
	arrayDivs = Array.from(arrayDivs);

	arrayDivs.forEach((div) => {
		
		div.addEventListener("mouseenter", () => {
			div.style.backgroundColor = "#000";
		});
	});

button.addEventListener("click", () => {

	grid = prompt("Enter the number of Grid squares per side:", "16"); 
	let divSize = (600/grid-2);
	container.style = `grid-template-columns: repeat(${grid}, ${divSize}px); grid-template-rows: repeat(${grid}, ${divSize}px);`

	for	(let i = 0; i < grid*grid; i++) {
		divs = document.createElement("div");
		divs.classList.add("divs");
		container.appendChild(divs);

		arrayDivs.push(divs);
	};
	
	console.log(grid);
	arrayDivs = Array.from(arrayDivs);

	arrayDivs.forEach((div) => {
		
		div.addEventListener("mouseenter", () => {
			div.style.backgroundColor = "#000";
		});
	});
});
