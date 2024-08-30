function GerarLink({lista}) {
	return (
		<>
			{lista.opcoesBotao.map((opcoesBotao, i) => {
				return (<li><a class="dropdown-item text-center" href={lista.links[i]}>{opcoesBotao}</a></li>);
			})}
		</>
	);
}

function GerarBotoes({info}) {
	return (
		<>
			{info.map((html, i) => {
				return (
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{info[i].nomeBotao}</button>
						<ul id={info[i].idBotao} class="dropdown-menu dropdown-menu-dark dropdown-menu">
							<GerarLink lista={info[i]} />
						</ul>
					</div>
				);
			})}
		</>
	);
}

export default function CardLinks({info}) {
	return (
		<div class="card text-center m-3">
			<div class="card-header">{info.titulo}</div>
			<div class="card-body">
				<h5 class="card-title">{info.subTitulo}</h5>
				<p class="card-text">{info.texto}</p>
				<GerarBotoes info={info.listaBotoes} />
			</div>
		</div>
	);
}