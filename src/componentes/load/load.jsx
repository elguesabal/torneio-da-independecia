export default function Load() {
	setTimeout(() => document.getElementById("load").style.display = "none", 2000);

	return(
		<div id="load" className="load fixed-top">
			<img className="imgLoad" src="./iconeBadbons.png" alt="Icone da Badbons" />
		</div>
	);
}