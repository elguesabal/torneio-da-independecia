import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../url.js";
import Load from "../../componentes/load/load.jsx";

export default function Jogos() {
	const [jogos, setJogos] = useState([]);
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState(null);

	useEffect(() => {
		const urlParams = new URL(window.location.href);
		const categoria = urlParams.searchParams.get("categoria");
		const modalidade = urlParams.searchParams.get("modalidade");

		axios.get(url + "/jogos?categoria=" + categoria + "&modalidade=" + modalidade)
		.then((res) => setJogos(res.data))
		.catch((erro) => setErro(erro.message))
		.finally(() => setCarregando(false));
	}, []);

	if (carregando) return (<Load />);
	if (erro) return (<p>Ocorreu um erro: {erro}</p>);

	return (
		<>
			<Load close="yes" />
			<button type="button" className="btn btn-primary" id="botaoAdm">Enviar alterações</button>
			<div className="container mt-5">
				<div id="jogos" className="table-responsive">
					{jogos.map((jogo, i) => {
						const atleta1 = (jogo.v == "1") ? "bg-success" : (jogo.v == "0") ? "" : "bg-danger" ;
						const atleta2 = (jogo.v == "2") ? "bg-success" : (jogo.v == "0") ? "" : "bg-danger" ;
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
										<td className={`align-middle textTable ${atleta1} bg-opacity-25`} rowSpan="3">{jogo.nome1}</td>
										<td className={`${atleta1} hCelula bg-opacity-25`}>{(jogo.set1_1 == 0) ? "" : jogo.set1_1}</td>
										<td className={`${atleta2} hCelula bg-opacity-25`}>{(jogo.set1_2 == 0) ? "" : jogo.set1_2}</td>
										<td className={`align-middle textTable ${atleta2} bg-opacity-25`} rowSpan="3">{jogo.nome2}</td>
									</tr>
									<tr>
										<td className={`${atleta1} hCelula bg-opacity-25`}>{(jogo.set2_1 == 0) ? "" : jogo.set2_1}</td>
										<td className={`${atleta2} hCelula bg-opacity-25`}>{(jogo.set2_2 == 0) ? "" : jogo.set2_2}</td>
									</tr>
									<tr>
										<td className={`${atleta1} hCelula bg-opacity-25`}>{(jogo.set3_1 == 0) ? "" : jogo.set3_1}</td>
										<td className={`${atleta2} hCelula bg-opacity-25`}>{(jogo.set3_2 == 0) ? "" : jogo.set3_2}</td>
									</tr>
								</tbody>
							</table>
						)
					})}
				</div>
			</div>
		</>
	);
}