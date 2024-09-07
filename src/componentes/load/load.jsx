
export default function Load({ close, error }) {
	if (close == "yes") setTimeout(() => document.getElementById("load").style.display = "none", 1000);
	if (error == "yes") {
		document.getElementById("imgLoad").style.display = "none";
		document.getElementById("erroLoad").style.display = "block";
	}
	return (
		<div id="load" className="load fixed-top">
			<img id="imgLoad" src="/public/iconeBadbons.png" alt="Icone da Badbons" />
			<p id="erroLoad">Erro</p>
		</div>
	);
}