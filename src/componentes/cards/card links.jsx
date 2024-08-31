function GerarLink({lista}) {
	return (
		<>
			{lista.opcoesBotao.map((opcoesBotao, i) => {
				return (<li key={i}><a className="dropdown-item text-center" href={lista.links[i]}>{opcoesBotao}</a></li>);
			})}
		</>
	);
}

function GerarBotoes({info}) {
	return (
		<>
			{info.map((html, i) => {
				return (
					<div key={i} className="btn-group">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{info[i].nomeBotao}</button>
						<ul id={info[i].idBotao} className="dropdown-menu dropdown-menu-dark dropdown-menu">
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
		<div className="card text-center m-3">
			<div className="card-header">{info.titulo}</div>
			<div className="card-body">
				<h5 className="card-title">{info.subTitulo}</h5>
				<p className="card-text">{info.texto}</p>
				<GerarBotoes info={info.listaBotoes} />
			</div>
		</div>
	);
}