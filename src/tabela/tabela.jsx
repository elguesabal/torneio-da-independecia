import { useEffect } from "react";
import axios from "axios";
import Load from "../componentes/load/load.jsx";
import { url } from "../url.js";


function Posicoes({categoria, modalidade}) {
	useEffect(() => {
		axios.get(url + "/tabela?" + "categoria=" + categoria + "&modalidade=" + modalidade)
		.then((res) => {
			let tabela = res.data;
			tabela.sort((a, b) => { return (b.v !== a.v) ? b.v - a.v : (b.pf - b.ps) - (a.pf - a.ps); });

			tabela.forEach((atleta, i) => {
				document.getElementById("table").innerHTML +=
					`<tr>
						<th scope="row">${i + 1}°</th>
						<td>${atleta.nome}</td>
						<td>${atleta.tj}</td>
						<td>${atleta.v}</td>
						<td>${atleta.d}</td>
						<td>${atleta.vSet}</td>
						<td>${atleta.pf}</td>
						<td>${atleta.ps}</td>
						<td>${(atleta.pf - atleta.ps)}</td>
					</tr>`;
			});
		})
		.catch((erro) => console.log("erro: ", erro));
	}, []);

	return (
		<tbody id="table"></tbody>
	);
}

function Glossario() {
	return (
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
	);
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
				<Posicoes categoria={categoria} modalidade={modalidade} />
			</table>

			<br/><br/><br/><hr/>
			<Glossario />
		</>
	);
}