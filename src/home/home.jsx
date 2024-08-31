import Load from "../componentes/load/load.jsx";
import CardLinks from "../componentes/cards/card links.jsx";
import Desenvolvedor from "../componentes/cards/desenvolvedor.jsx";

const url = new URL(window.location.href);
const adm = url.searchParams.get("adm");

export default function Home() {
	const tabelas = {
		titulo: "BADBONS OPEN",
		subTitulo: "Tabela de classificação",
		texto: "Tenha acesso ao ranking de cada grupo.",
		listaBotoes: [
			{
				idBotao: "tabelaJovens",
				nomeBotao: "Jovens",
				opcoesBotao: [
					"Simples masculino",
					"Simples feminino",
					"Dupla mista"
				],
				links: [
					"./tabela?categoria=jovens&modalidade=masculino",
					"./tabela?categoria=jovens&modalidade=feminino",
					"./tabela?categoria=jovens&modalidade=mista"
				]
			},
			{
				idBotao: "tabelaAdultos",
				nomeBotao: "Adultos",
				opcoesBotao: [
					"Simples masculino 1",
					"Simples masculino 2",
					"Simples feminino 1",
					"Simples feminino 2",
					"Simples feminino 3",
					"Dupla mista 1",
					"Dupla mista 2"
				],
				links: [
					"./tabela?categoria=adultos&modalidade=masculino1",
					"./tabela?categoria=adultos&modalidade=masculino2",
					"./tabela?categoria=adultos&modalidade=feminino1",
					"./tabela?categoria=adultos&modalidade=feminino2",
					"./tabela?categoria=adultos&modalidade=feminino3",
					"./tabela?categoria=adultos&modalidade=mista1",
					"./tabela?categoria=adultos&modalidade=mista2"
				]
			}
		]
	}
	if (adm == "true") {
		for (let i = 0; i < tabelas.listaBotoes.length; i++) {
			tabelas.listaBotoes[i].links.forEach((link, j) => {
				tabelas.listaBotoes[i].links[j] += "&adm=true";
			});
		}
	}


	const jogos = {
		titulo: "BADBONS OPEN",
		subTitulo: "Lista de jogos",
		texto: "Tenha acesso ao resultado de cada jogo.",
		listaBotoes: [
			{
				idBotao: "jogosJovens",
				nomeBotao: "Jovens",
				opcoesBotao: [
					"Simples masculino",
					"Simples feminino",
					"Dupla mista"
				],
				links: [
					"./jogo?categoria=jovens&modalidade=masculino",
					"./jogo?categoria=jovens&modalidade=feminino",
					"./jogo?categoria=jovens&modalidade=mista"
				]
			},
			{
				idBotao: "jogosAdultos",
				nomeBotao: "Adultos",
				opcoesBotao: [
					"Simples masculino 1",
					"Simples masculino 2",
					"Simples feminino 1",
					"Simples feminino 2",
					"Simples feminino 3",
					"Dupla mista 1",
					"Dupla mista 2"
				],
				links: [
					"./jogo?categoria=adultos&modalidade=masculino1",
					"./jogo?categoria=adultos&modalidade=masculino2",
					"./jogo?categoria=adultos&modalidade=feminino1",
					"./jogo?categoria=adultos&modalidade=feminino2",
					"./jogo?categoria=adultos&modalidade=feminino3",
					"./jogo?categoria=adultos&modalidade=mista1",
					"./jogo?categoria=adultos&modalidade=mista2"
				]
			}
		]
	}
	if (adm == "true") {
		for (let i = 0; i < jogos.listaBotoes.length; i++) {
			jogos.listaBotoes[i].links.forEach((link, j) => {
				jogos.listaBotoes[i].links[j] += "&adm=true";
			});
		}
	}


	return (
		<div id="home">
			<Load />
			<div className="d-flex flex-column align-items-stretch justify-content-center m-2 opacity-75">
				<CardLinks info={tabelas} />
				<CardLinks info={jogos} />
			</div>
			<Desenvolvedor />
		</div>
	);
}