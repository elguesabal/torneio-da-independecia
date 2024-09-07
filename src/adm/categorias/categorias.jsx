import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../url.js";
import Load from "../../componentes/load/load.jsx";
import { inicioLoad, fimLoad, erroLoad } from "../../componentes/load/metodosLoad.js";

export default function Categorias() {
	const urlParams = new URL(window.location.href);
	const categoria = urlParams.searchParams.get("categoria");

	const [modalidades, setModalidades] = useState([]);
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState(null);

	useEffect(() => {
		axios.get(`${url}/adm/categoria?categoria=${categoria}`)
		.then((res) => setModalidades(res.data))
		.catch((erro) => setErro(erro.message))
		.finally(() => setCarregando(false));
	}, []);

	function adcicionarCampo() {
		const elemento = document.getElementById("modalidades");

		elemento.innerHTML +=
		`<div class="mb-3">
			<input type="text" class="form-control" id="${"modalidade" + elemento.childElementCount}" placeholder="Adicione uma modalidade..." />
		</div>`;
	}

	function deleteCategoria() {
		inicioLoad();
		axios.delete(`${url}/adm/categoria/${categoria}`)
		.then((res) => fimLoad())
		.catch((erro) => erroLoad());
	}
	
	function updateCategoria() {
		const elemento = document.getElementById("modalidades");
		let update = [];

		for (let i = 0; i < elemento.childElementCount; i++) {
			const nome = document.getElementById("modalidade" + i).value;
			if (nome) update.push(nome);
		}
		inicioLoad();
		axios.put(`${url}/adm/categoria/${categoria}`, update)
		.then((res) => fimLoad())
		.catch((erro) => erroLoad());
	}

	if (carregando) return (<Load />);
	if (erro) return (<Load error="yes" />);

	return (
		<>
			<Load close="yes" />
			<div className="d-flex align-items-center justify-content-center mt-3">
				<button className="btn btn-primary m-3" onClick={updateCategoria}>Atualizar categoria</button>
				<button className="btn btn-outline-info m-3" onClick={adcicionarCampo}><i className="bi bi-plus-circle-fill"></i></button>
				<button className="btn btn-outline-info m-3" onClick={deleteCategoria}><i className="bi bi-trash"></i></button>
			</div>
			<h1>Categoria: {categoria}</h1>
			<div className="m-3" id="modalidades">
				{modalidades.map((modalidade, i) => (
					<div key={i} className="mb-3">
						<input type="text" className="form-control" id={"modalidade" + i} placeholder="Adicione uma modalidade..." defaultValue={modalidade} />
					</div>
				))}
			</div>
		</>
	);
}