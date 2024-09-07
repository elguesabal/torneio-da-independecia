export function inicioLoad() {
	document.getElementById("load").style.display = "block";
}

export function fimLoad() {
	setTimeout(() => { load.style.display = "none" }, 1000);
}

export function erroLoad() {
	document.getElementById("imgLoad").style.display = "none";
	document.getElementById("erroLoad").style.display = "block";
}