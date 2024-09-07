import axios from "axios";
import { url } from "../../url.js";
import Load from "../../componentes/load/load.jsx";
import { inicioLoad, fimLoad, erroLoad } from "../../componentes/load/metodosLoad.js";

export default function NovaCategoria() {
	function adcicionarCampo() {
		const elemento = document.getElementById("categorias");

		elemento.innerHTML +=
		`<div class="mb-3">
			<input type="text" class="form-control" id="${"categoria" + elemento.childElementCount}" placeholder="Adicione uma categoria..." />
		</div>`;
	}
	
	function novasCategorias() {
		const elemento = document.getElementById("categorias");
		let novasCategorias = [];

		for (let i = 0; i < elemento.childElementCount; i++) {
			const categoria = document.getElementById("categoria" + i).value;
			if (categoria) novasCategorias.push(categoria);
		}
		inicioLoad();
		axios.post(`${url}/adm/categoria`, novasCategorias)
		.then((res) => fimLoad())
		.catch((erro) => erroLoad());
	}

	return (
		<>
			<Load close="yes" />
			<div className="d-flex align-items-center justify-content-center mt-3">
				<button className="btn btn-primary m-3" onClick={novasCategorias}>Atualizar categoria</button>
				<button className="btn btn-outline-info m-3"><i className="bi bi-plus-circle-fill" onClick={adcicionarCampo}></i></button>
			</div>
			<div className="m-3" id="categorias">
				<div className="mb-3">
					<input type="text" className="form-control" id="categoria0" placeholder="Adicione uma categoria..." />
				</div>
			</div>
		</>
	);
}