import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../url.js";
import Load from "../../componentes/load/load.jsx";
import { inicioLoad, fimLoad, erroLoad } from "../../componentes/load/metodosLoad.js";

export default function JogosAdm() {
	const [jogos, setJogos] = useState([]);
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState(null);
	const urlParams = new URL(window.location.href);
	const categoria = urlParams.searchParams.get("categoria");
	const modalidade = urlParams.searchParams.get("modalidade");

	useEffect(() => {
		axios.get(url + "/jogos?categoria=" + categoria + "&modalidade=" + modalidade)
		.then((res) => setJogos(res.data))
		.catch((erro) => setErro(erro.message))
		.finally(() => setCarregando(false));
	}, []);

	function vitoria(sets, set1_1, set2_1, set3_1, set1_2, set2_2, set3_2) {
		if (sets == 0) {
			return 0;
		} else if(sets == 2 && set1_1 > set1_2 && set2_1 > set2_2) {
			return 1;
		} else if (sets == 2 && set1_1 < set1_2 && set2_1 < set2_2) {
			return 2;
		} else {
			return (set3_1 > set3_2) ? 1 : 2;
		}
	}
	
	function novosPlacares() {
		const lenChild = document.getElementById("jogos");
		let jogos = [];

		for(let i = 0; i < lenChild.childElementCount; i++) {
			const nome1 = document.getElementById(`jogo${i}Nome1`).textContent;
			const set1_1 = Number(document.getElementById(`jogo${i}Set1_1`).value);
			const set2_1 = Number(document.getElementById(`jogo${i}Set2_1`).value);
			const set3_1 = Number(document.getElementById(`jogo${i}Set3_1`).value);
	
			const nome2 = document.getElementById(`jogo${i}Nome2`).textContent;
			const set1_2 = Number(document.getElementById(`jogo${i}Set1_2`).value);
			const set2_2 = Number(document.getElementById(`jogo${i}Set2_2`).value);
			const set3_2 = Number(document.getElementById(`jogo${i}Set3_2`).value);
	
			const sets = (set1_1 == 0 && set1_2 == 0) ? 0 : (set3_1 == 0 && set3_2 == 0) ? 2 : 3 ;
			const v = vitoria(sets, set1_1, set2_1, set3_1, set1_2, set2_2, set3_2);

			const jogo = {
				nome1: nome1, set1_1: set1_1, set2_1: set2_1, set3_1: set3_1,
				nome2: nome2, set1_2: set1_2, set2_2: set2_2, set3_2: set3_2,
				sets: sets, v: v
			};
			jogos.push(jogo);
		}
		return (jogos);
	}
	
	function enviar() {
		inicioLoad();
		axios.put(url + "/adm/jogos/" + categoria + "/" + modalidade, novosPlacares())
		.then((res) => fimLoad())
		.catch((erro) => erroLoad())
	}

	if (carregando) return (<Load />);
	if (erro) return (<Load error="yes" />);

	return (
		<>
			<Load close="yes" />

			<button type="button" className="btn btn-primary" id="botaoAdm" onClick={enviar}>Enviar alterações</button>

			<div className="container mt-5">
				<div id="jogos" className="table-responsive">
					{jogos.map((jogo, i) => {
						const atleta1 = (jogo.v == 1) ? "bg-success" : (jogo.v == 0) ? "" : "bg-danger" ;
						const atleta2 = (jogo.v == 2) ? "bg-success" : (jogo.v == 0) ? "" : "bg-danger" ;
						return (
							<table key={i} className="table table-bordered border-primary text-center">
								<thead>
									<tr>
										<th scope="col" className="width30">Nome</th>
										<th scope="col" className="width10">Pontos</th>
										<th scope="col" className="width10">Pontos</th>
										<th scope="col" className="width30">Nome</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td id={`jogo${i}Nome1`} className={`align-middle textTable ${atleta1} bg-opacity-25`} rowSpan="3">{jogo.nome1}</td>
										<td className={`${atleta1} bg-opacity-25`}><input type="number" id={`jogo${i}Set1_1`} className="form-control" min="1" max="40" defaultValue={jogo.set1_1} /></td>
										<td className={`${atleta2} bg-opacity-25`}><input type="number" id={`jogo${i}Set1_2`} className="form-control" min="1" max="40" defaultValue={jogo.set1_2} /></td>
										<td id={`jogo${i}Nome2`} className={`align-middle textTable ${atleta2} bg-opacity-25`} rowSpan="3">{jogo.nome2}</td>
									</tr>
									<tr>
										<td className={`${atleta1} bg-opacity-25`}><input type="number" id={`jogo${i}Set2_1`} className="form-control" min="1" max="40" defaultValue={jogo.set2_1} /></td>
										<td className={`${atleta2} bg-opacity-25`}><input type="number" id={`jogo${i}Set2_2`} className="form-control" min="1" max="40" defaultValue={jogo.set2_2} /></td>
									</tr>
									<tr>
										<td className={`${atleta1} bg-opacity-25`}><input type="number" id={`jogo${i}Set3_1`} className="form-control" min="1" max="40" defaultValue={jogo.set3_1} /></td>
										<td className={`${atleta2} bg-opacity-25`}><input type="number" id={`jogo${i}Set3_2`} className="form-control" min="1" max="40" defaultValue={jogo.set3_2} /></td>
									</tr>
								</tbody>
							</table>
						);
					})}
				</div>
			</div>
		</>
	);
}