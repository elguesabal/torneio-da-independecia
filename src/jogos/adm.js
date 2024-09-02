import axios from "axios";
import { url } from "../url.js";

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
	return jogos;
}

function enviar(categoria, modalidade) {
	const load = document.getElementById("loadAdm");
	const spinner = document.getElementById("spinner");

	load.style.display = "block";
	axios.put(url + "/adm/jogos/" + categoria + "/" + modalidade, novosPlacares())
	.then((res) => load.style.display = "none")
	.catch((erro) => spinner.innerHTML = "Error");
}

function senhaAdm(event) {
	event.preventDefault();
	(document.getElementById("senha").value == "123") ? document.getElementById("loadSenha").style.display = "none" : undefined;
}

export default function adm(categoria, modalidade) {
	document.getElementById("botaoAdm").style.display = "block";
	document.getElementById("loadSenha").style.display = "block";
	document.getElementById("botaoAdm").addEventListener("click", () => enviar(categoria, modalidade)); // AINDA NAO TA FUNCIONANDO
	document.getElementById("formSenha").addEventListener("submit", (event) => senhaAdm(event));

	axios.get(url + "/jogos?categoria=" + categoria + "&modalidade=" + modalidade)
	.then((res) => {
		res.data.forEach((jogo, i) => {
			const atleta1 = (jogo.v == 1) ? "bg-success" : (jogo.v == 0) ? "" : "bg-danger" ;
			const atleta2 = (jogo.v == 2) ? "bg-success" : (jogo.v == 0) ? "" : "bg-danger" ;
			document.getElementById("jogos").innerHTML +=
				`<table class="table table-bordered border-primary text-center">
					<thead>
						<tr>
							<th scope="col" class="width30">Nome</th>
							<th scope="col" class="width10">Pontos</th>
							<th scope="col" class="width10">Pontos</th>
							<th scope="col" class="width30">Nome</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td id="jogo${i}Nome1" class="align-middle textTable ${atleta1} bg-opacity-25" rowspan="3">${jogo.nome1}</td>
							<td class="${atleta1} bg-opacity-25"><input type="number" id="jogo${i}Set1_1" class="form-control" min="1" max="40" value="${jogo.set1_1}"></td>
							<td class="${atleta2} bg-opacity-25"><input type="number" id="jogo${i}Set1_2" class="form-control" min="1" max="40" value="${jogo.set1_2}"></td>
							<td id="jogo${i}Nome2" class="align-middle textTable ${atleta2} bg-opacity-25" rowspan="3">${jogo.nome2}</td>
						</tr>
						<tr>
							<td class="${atleta1} bg-opacity-25"><input type="number" id="jogo${i}Set2_1" class="form-control" min="1" max="40" value="${jogo.set2_1}"></td>
							<td class="${atleta2} bg-opacity-25"><input type="number" id="jogo${i}Set2_2" class="form-control" min="1" max="40" value="${jogo.set2_2}"></td>
						</tr>
						<tr>
							<td class="${atleta1} bg-opacity-25"><input type="number" id="jogo${i}Set3_1" class="form-control" min="1" max="40" value="${jogo.set3_1}"></td>
							<td class="${atleta2} bg-opacity-25"><input type="number" id="jogo${i}Set3_2" class="form-control" min="1" max="40" value="${jogo.set3_2}"></td>
						</tr>
					</tbody>
				</table>`;
		});
	})
	.catch((erro) => console.log("erro: ", erro));
}