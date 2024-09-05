import axios from "axios";
import { url } from "../../url.js";

export default function user(categoria, modalidade) {
	axios.get(url + "/jogos?categoria=" + categoria + "&modalidade=" + modalidade)
	.then((res) => {
		res.data.forEach((jogo) => {
			const atleta1 = (jogo.v == "1") ? "bg-success" : (jogo.v == "0") ? "" : "bg-danger" ;
			const atleta2 = (jogo.v == "2") ? "bg-success" : (jogo.v == "0") ? "" : "bg-danger" ;
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
							<td class="align-middle textTable ${atleta1} bg-opacity-25" rowspan="3">${jogo.nome1}</td>
							<td class="${atleta1} hCelula bg-opacity-25">${(jogo.set1_1 == 0) ? "" : jogo.set1_1}</td>
							<td class="${atleta2} hCelula bg-opacity-25">${(jogo.set1_2 == 0) ? "" : jogo.set1_2}</td>
							<td class="align-middle textTable ${atleta2} bg-opacity-25" rowspan="3">${jogo.nome2}</td>
						</tr>
						<tr>
							<td class="${atleta1} hCelula bg-opacity-25">${(jogo.set2_1 == 0) ? "" : jogo.set2_1}</td>
							<td class="${atleta2} hCelula bg-opacity-25">${(jogo.set2_2 == 0) ? "" : jogo.set2_2}</td>
						</tr>
						<tr>
							<td class="${atleta1} hCelula bg-opacity-25">${(jogo.set3_1 == 0) ? "" : jogo.set3_1}</td>
							<td class="${atleta2} hCelula bg-opacity-25">${(jogo.set3_2 == 0) ? "" : jogo.set3_2}</td>
						</tr>
					</tbody>
				</table>`;
		});
	})
	.catch((erro) => console.log("erro: ", erro));
}