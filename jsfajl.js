
const container = document.querySelector("#container");
let divs;
let arrayDivs = [];

for(let i=0; i<256; i++) {

	divs = document.createElement("div");
	divs.classList.add("divs");
	container.appendChild(divs);

	arrayDivs.push(divs);
};

arrayDivs = Array.from(arrayDivs);

arrayDivs.forEach((div) => {
	div.addEventListener('mouseenter', () => {
		div.style.backgroundColor = "#000";
	});
});