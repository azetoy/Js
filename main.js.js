var rects = [];
window.addEventListener("load" , main);

function main(event){
	//alert("J-3 avant que je me tire une balle");
	var rect = randRect();
	factory("div", rect.x, rect.y, rect.w, rect.h);
	console.log("main");
	console.log(multiRandRect(10));

}

function randRange(min, max) {
	return Math.floor(Math.random() * (max-min+1)) + min;

}

function randomColor() {
	return "#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
}

function hitTest(r1, r2) {
	(((r1.x + r1.w >= r2.x) && (r1.x <= r2.x + r2.w )) && ((r1.y + r1.h >= r2.y) && (r1.y <= r2.y + r2.h)));

}

function hitTestAll() {

}

//function multiRandRect(n){

	if (multiRandRect(n) == 0) {

		return "work finish succes"; // pour savoir ci ca marche equivalent a une alerte
	}else{

		function randRect() {
			 multiRandRect(n - 1);
		}
	}


function randRect() {
	//if (n == 0) {

	//	return {x: randRange(0, document.body.clientWidth), y: randRange(0, document.body.clientHeight), w: randRange(10, 200), h: randRange(10, 200) randRect(n -)} echec egallement i utile de poursuivre sur cette voie

	//}
	//randRect(n) = 2
	//if (randRect == 0){ tentavie de recursive echec depassement de la pile memoire en gros tros d'appel de la fonction
	//	randRect (n - 1)
	
	return {x: randRange(0, document.body.clientWidth), y: randRange(0, document.body.clientHeight), w: randRange(10, 200), h: randRange(10, 200)}
}

function factory(el, x, y, w, h){
	var element = document.createElement(el);
	element.style.position = "absolute";
	element.style.left = x + "px";
	element.style.top = y + "px";
	element.style.width = w + "px";
	element.style.height = h + "px";
	element.style.backgroundColor = randomColor();
	document.body.appendChild(element);
}