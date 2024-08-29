export default function CardLinks({info}) {


	return (
		<div class="card text-center m-3">
			<div class="card-header">{info.titulo}</div>
			<div class="card-body">
				<h5 class="card-title">{info.subTitulo}</h5>
				<p class="card-text">{info.texto}</p>
				<div class="btn-group">
					<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{info.nomeBotao[0]}</button>
					<ul id="tabelaJovens" class="dropdown-menu dropdown-menu-dark dropdown-menu">
						<li><a class="dropdown-item text-center" href={info.links[0][0]}>{info.opcoesBotao[0][0]}</a></li>
						<li><a class="dropdown-item text-center" href={info.links[0][1]}>{info.opcoesBotao[0][1]}</a></li>
						<li><a class="dropdown-item text-center" href={info.links[0][2]}>{info.opcoesBotao[0][2]}</a></li>
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
		</div>
	);
}