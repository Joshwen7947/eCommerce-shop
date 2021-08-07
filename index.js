const rightButton = document.getElementById('right');
const leftButton = document.getElementById('left');

function ShowSectionTwo() {
	let section2 = document.getElementById('main2');
	let section1 = document.getElementById('main');
	if (section2.style.display == 'none') {
		section2.style.display = 'flex';
		section1.style.display = 'none';
	} else {
		section2.style.display = 'none';
	}
}
function ShowSectionThree() {
	let section2 = document.getElementById('main2');
	let section3 = document.getElementById('main3');
	if (section3.style.display == 'none') {
		section3.style.display = 'flex';
		section2.style.display = 'none';
	} else {
		section3.style.display = 'none';
	}
}
function GoBackSectionOne() {
	let section2 = document.getElementById('main2');
	let section1 = document.getElementById('main');
	if (section1.style.display == 'none') {
		section1.style.display = 'flex';
		section2.style.display = 'none';
	} else {
		section1.style.display = 'none';
	}
}
// function GoBackSectionTwo() {
// 	let section3 = document.getElementById('main2');
// 	let section2 = document.getElementById('main');
// 	if (section2.style.display == 'none') {
// 		section2.style.display = 'flex';
// 		section3.style.display = 'none';
// 	} else {
// 		section2.style.display = 'none';
// 	}
// }
