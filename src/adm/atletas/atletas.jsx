import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../url.js";
import Load from "../../componentes/load/load.jsx";
import { inicioLoad, fimLoad, erroLoad } from "../../componentes/load/metodosLoad.js";

export default function Atletas() {
	const [atletas, setAtletas] = useState([]);
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState(null);
	const urlParams = new URL(window.location.href);
	const categoria = urlParams.searchParams.get("categoria");
	const modalidade = urlParams.searchParams.get("modalidade");

	useEffect(() => {
		axios.get(`${url}/tabela?categoria=${categoria}&modalidade=${modalidade}`)
		.then((res) => setAtletas(res.data))
		.catch((erro) => setErro(erro.message))
		.finally(() => setCarregando(false));
	}, []);

	function adcicionarCampo() {
		const elemento = document.getElementById("atletas");

		elemento.innerHTML +=
		`<div class="mb-3">
			<input type="text" class="form-control" id="${"atleta" + elemento.childElementCount}" placeholder="Adicione um atleta..." />
		</div>`;
	}
	
	function updateAtletas() {
		const elemento = document.getElementById("atletas");
		let update = [];

		for (let i = 0; i < elemento.childElementCount; i++) {
			const nome = document.getElementById("atleta" + i).value;
			if (nome) update.push({ nome: nome });
		}
		inicioLoad();
		axios.put(`${url}/adm/atletas/${categoria}/${modalidade}`, update)
		.then((res) => fimLoad())
		.catch((erro) => erroLoad());
	}

	if (carregando) return (<Load />);
	if (erro) return (<Load error="yes" />);

	return (
		<>
			<Load close="yes" />
			<div className="d-flex align-items-center justify-content-center mt-3">
				<button className="btn btn-primary m-3" onClick={updateAtletas}>Atualizar atletas</button>
				<button className="btn btn-outline-info m-3"><i className="bi bi-plus-circle-fill" onClick={adcicionarCampo}></i></button>
			</div>
			<div className="m-3" id="atletas">
				{atletas.map((atleta, i) => (
					<div key={i} className="mb-3">
						<input type="text" className="form-control" id={"atleta" + i} placeholder="Adicione um atleta..." defaultValue={atleta.nome} />
					</div>
				))}
			</div>
		</>
	);
}