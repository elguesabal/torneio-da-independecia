export default function Load({ close }) {
	if (close == "yes") {
		setTimeout(() => document.getElementById("load").style.display = "none", 1000); // VOU MANTER ISSO PQ ALGUMAS PAGINAS TEM RENDERIZACAO DE LOAD FAKE
	}

	return(
		<div id="load" className="load fixed-top">
			<img className="imgLoad" src="/public/iconeBadbons.png" alt="Icone da Badbons" />
		</div>
	);
}