export default function Load() {
	setTimeout(() => document.getElementById("load").style.display = "none", 2000);

	return(
		<div id="load" class="load fixed-top">
			<img class="imgLoad" src="./iconeBadbons.png" alt="Icone da Badbons"/>
		</div>
	);
}