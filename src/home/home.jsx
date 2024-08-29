import Load from "../componentes/load/load.jsx";
import CardLinks from "../componentes/cards/card links.jsx";
import Desenvolvedor from "../componentes/cards/desenvolvedor.jsx";

export default function Home() {
	const tabelas = {
		titulo: "BADBONS OPEN",
		subTitulo: "Tabela de classificação",
		texto: "Tenha acesso ao ranking de cada grupo.",
		nomeBotao: [
			"Jovens",
			"Adultos"
		],
		opcoesBotao: [
			[
				"Simples masculino",
				"Simples feminino",
				"Dupla mista"
			],
			[
				"Simples masculino 1",
				"Simples masculino 2",
				"Simples feminino 1",
				"Simples feminino 2",
				"Simples feminino 3",
				"Dupla mista 1",
				"Dupla mista 2"
			]
		],
		links: [
			[
				"./tabelas/tabela.html?categoria=jovens&modalidade=masculino",
				"./tabelas/tabela.html?categoria=jovens&modalidade=feminino",
				"./tabelas/tabela.html?categoria=jovens&modalidade=mista"
			],
			[
				"./tabelas/tabela.html?categoria=adultos&modalidade=masculino1",
				"./tabelas/tabela.html?categoria=adultos&modalidade=masculino2",
				"./tabelas/tabela.html?categoria=adultos&modalidade=feminino1",
				"./tabelas/tabela.html?categoria=adultos&modalidade=feminino2",
				"./tabelas/tabela.html?categoria=adultos&modalidade=feminino3",
				"./tabelas/tabela.html?categoria=adultos&modalidade=mista1",
				"./tabelas/tabela.html?categoria=adultos&modalidade=mista2"
			]
		]
	}

	return (
		<div id="home">

			<Load />

			<div class="d-flex flex-column align-items-stretch justify-content-center m-2 opacity-75">

				{/* <div class="card text-center m-3">
					<div class="card-header">BADBONS OPEN</div>
					<div class="card-body">
						<h5 class="card-title">Tabela de classificação</h5>
						<p class="card-text">Tenha acesso ao ranking de cada grupo.</p>
						<div class="btn-group">
							<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Jovens</button>
							<ul id="tabelaJovens" class="dropdown-menu dropdown-menu-dark dropdown-menu">
								<li><a class="dropdown-item text-center" href="./tabelas/tabela.html?categoria=jovens&modalidade=masculino">Simples masculino</a></li>
								<li><a class="dropdown-item text-center" href="./tabelas/tabela.html?categoria=jovens&modalidade=feminino">Simples feminino</a></li>
								<li><a class="dropdown-item text-center" href="./tabelas/tabela.html?categoria=jovens&modalidade=mista">Dupla mista</a></li>
							</ul>
						</div>
						<div class="btn-group">
							<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Adultos</button>
							<ul id="tabelaAdultos" class="dropdown-menu dropdown-menu-dark dropdown-menu">
								<li><a class="dropdown-item text-center" href="./tabelas/tabela.html?categoria=adultos&modalidade=masculino1">Simples masculino 1</a></li>
								<li><a class="dropdown-item text-center" href="./tabelas/tabela.html?categoria=adultos&modalidade=masculino2">Simples masculino 2</a></li>
								<li><a class="dropdown-item text-center" href="./tabelas/tabela.html?categoria=adultos&modalidade=feminino1">Simples feminino 1</a></li>
								<li><a class="dropdown-item text-center" href="./tabelas/tabela.html?categoria=adultos&modalidade=feminino2">Simples feminino 2</a></li>
								<li><a class="dropdown-item text-center" href="./tabelas/tabela.html?categoria=adultos&modalidade=feminino3">Simples feminino 3</a></li>
								<li><a class="dropdown-item text-center" href="./tabelas/tabela.html?categoria=adultos&modalidade=mista1">Dupla mista 1</a></li>
								<li><a class="dropdown-item text-center" href="./tabelas/tabela.html?categoria=adultos&modalidade=mista2">Dupla mista 2</a></li>
							</ul>
						</div>
					</div>
				</div> */}
				<CardLinks info={tabelas}/>


				<div class="card text-center m-3">
					<div class="card-header">BADBONS OPEN</div>
					<div class="card-body">
						<h5 class="card-title">Lista de jogos</h5>
						<p class="card-text">Tenha acesso ao resultado de cada jogo.</p>
						<div class="btn-group">
							<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Jovens</button>
							<ul id="jogosJovens" class="dropdown-menu dropdown-menu-dark dropdown-menu">
								<li><a class="dropdown-item text-center" href="./jogos/jogo.html?categoria=jovens&modalidade=masculino">Simples masculino</a></li>
								<li><a class="dropdown-item text-center" href="./jogos/jogo.html?categoria=jovens&modalidade=feminino">Simples feminino</a></li>
								<li><a class="dropdown-item text-center" href="./jogos/jogo.html?categoria=jovens&modalidade=mista">Dupla mista</a></li>
							</ul>
						</div>
						<div class="btn-group">
							<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Adultos</button>
							<ul id="jogosAdultos" class="dropdown-menu dropdown-menu-dark dropdown-menu">
								<li><a class="dropdown-item text-center" href="./jogos/jogo.html?categoria=adultos&modalidade=masculino1">Simples masculino 1</a></li>
								<li><a class="dropdown-item text-center" href="./jogos/jogo.html?categoria=adultos&modalidade=masculino2">Simples masculino 2</a></li>
								<li><a class="dropdown-item text-center" href="./jogos/jogo.html?categoria=adultos&modalidade=feminino1">Simples feminino 1</a></li>
								<li><a class="dropdown-item text-center" href="./jogos/jogo.html?categoria=adultos&modalidade=feminino2">Simples feminino 2</a></li>
								<li><a class="dropdown-item text-center" href="./jogos/jogo.html?categoria=adultos&modalidade=feminino3">Simples feminino 3</a></li>
								<li><a class="dropdown-item text-center" href="./jogos/jogo.html?categoria=adultos&modalidade=mista1">Dupla mista 1</a></li>
								<li><a class="dropdown-item text-center" href="./jogos/jogo.html?categoria=adultos&modalidade=mista2">Dupla mista 2</a></li>
							</ul>
						</div>
					</div>
				</div>

			</div>

			<Desenvolvedor />

		</div>
	);
}