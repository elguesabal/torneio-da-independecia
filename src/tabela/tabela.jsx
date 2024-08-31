import { useEffect } from "react";
import Load from "../componentes/load/load.jsx";
import { linkApi } from "../linkApi.js";

import { useState } from "react";
import axios from "axios";


// async function requisicao(link) {
// 	try {
// 		let res = await fetch(link);
// 		res = await res.json();
// 		return (res);
// 	} catch (erro) {
// 		console.log("erro na requisicao: ", erro);
// 		return ("erro");
// 	}
// }

function Posicoes({categoria, modalidade}) {

	// fetch("https://api-7-circuito-badbons-open.onrender.com/tabela" + "?categoria=" + categoria + "&modalidade=" + modalidade)
	// .then(res => { return res.json(); })
	// .then(table => {
	// 	table.sort((a, b) => { return (b.v !== a.v) ? b.v - a.v : (b.pf - b.ps) - (a.pf - a.ps); });

	// 	// table.map((atleta, i) => { // NAO TA FUNFANDO AINDA
	// 	// 	return (
	// 	// 		<tr>
	// 	// 			<th scope="row">{i + 1}°</th>
	// 	// 			<td>{atleta.nome}</td>
	// 	// 			<td>{atleta.tj}</td>
	// 	// 			<td>{atleta.v}</td>
	// 	// 			<td>{atleta.d}</td>
	// 	// 			<td>{atleta.vSet}</td>
	// 	// 			<td>{atleta.pf}</td>
	// 	// 			<td>{atleta.ps}</td>
	// 	// 			<td>{atleta.pf - table[i].ps}</td>
	// 	// 		</tr>
	// 	// 	);
	// 	// })



	// useEffect(() => {
	// 	const atualizarTabela = async () => { // TO PERDIDO KKKKKKKKK
	// 		// try {
	// 			setTabela(await requisicao(linkApi + "/tabela" + "?categoria=" + categoria + "&modalidade=" + modalidade));
	// 			// await setTabela("teste")
	// 		// } catch (erro) {
	// 			// setTabela(null);
	// 		// }
	// 	}
	// 	atualizarTabela();
	// }, []);





	const [tabela, setTabela] = useState("aaaaleleke");
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState(null);

	useEffect(() => {
		const request = async () => {
			try {
				const res = await axios.get(linkApi);
				setTabela(res.data);
			} catch (erro) {
				setErro(erro.message);
			} finally {
				setCarregando(false);
			}
		};

		request();
	}, []);

	if (carregando) {
		return (<tr><td>ta carregando</td></tr>);
	}

	if (erro) {
		return (<tr><td>deu esse erro: {erro}</td></tr>);
	}

	return (<tr><td>nao esperou nada</td></tr>);
}

export default function Tabela() {
	const url = new URL(window.location.href);
	const categoria = url.searchParams.get("categoria");
	const modalidade = url.searchParams.get("modalidade");

	return (
		<>
			<Load />
			
			<table className="table">
				<thead className="table-dark">
					<tr>
						<th scope="col">N°</th>
						<th scope="col">Nome</th>
						<th scope="col">TJ</th>
						<th scope="col">V</th>
						<th scope="col">D</th>
						<th scope="col">VS</th>
						<th scope="col">PF</th>
						<th scope="col">PS</th>
						<th scope="col">SP</th>
					</tr>
				</thead>
				<tbody id="table">
					{/* <tr>
								<th scope="row">0°</th>
								<td>1</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
								<td>6</td>
								<td>7</td>
								<td>8</td>
					</tr> */}
								<Posicoes categoria={categoria} modalidade={modalidade} />
				</tbody>
			</table>

			<br/><br/><br/><hr/>
			<table className="table">
				<thead>
					<tr>
						<th className="text-center" colSpan="3" scope="col">Glossário</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="text-center">TJ <i className="bi bi-arrow-right fs-3"></i></td>
						<td colSpan="3">Total de jogos disputados</td>
					</tr>
					<tr>
						<td className="text-center">V <i className="bi bi-arrow-right fs-3"></i></td>
						<td colSpan="3">Total de vitorias</td>
					</tr>
					<tr>
						<td className="text-center">D <i className="bi bi-arrow-right fs-3"></i></td>
						<td colSpan="3">Total de derrotas</td>
					</tr>
					<tr>
						<td className="text-center">VS <i className="bi bi-arrow-right fs-3"></i></td>
						<td colSpan="3">Total de sets vencidos</td>
					</tr>
					<tr>
						<td className="text-center">PF <i className="bi bi-arrow-right fs-3"></i></td>
						<td colSpan="3">Pontos feitos</td>
					</tr>
					<tr>
						<td className="text-center">PS <i className="bi bi-arrow-right fs-3"></i></td>
						<td colSpan="3">Pontos sofridos</td>
					</tr>
					<tr>
						<td className="text-center">SP <i className="bi bi-arrow-right fs-3"></i></td>
						<td colSpan="3">Saldo de pontos</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}