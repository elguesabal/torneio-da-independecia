function creatLinks(categoria, modalidades, rota) {
	let links = [];

	modalidades.forEach((modalidade) => links.push(`./adm/${rota}?categoria=${categoria}&modalidade=${modalidade}&adm=true`));
	return (links);
}

function creatListaBotoes(info, rota) {
	let listaBotoes = [];
	
	info.forEach((botao) => {
		listaBotoes.push({
			idBotao: `${rota}${botao.categoria}`,
			nomeBotao: botao.categoria,
			opcoesBotao: botao.modalidades,
			links: creatLinks(botao.categoria, botao.modalidades, rota)
		});
	});
	return (listaBotoes);
}

export function infoCategorias(info) {
	let categorias = [];

	info.forEach((categoria) => categorias.push(categoria.categoria));
	// console.log(categorias)
	return (categorias);
}

export function infoAtletas(info) {
	return ({
		titulo: "BADBONS OPEN",
		subTitulo: "Lista de atletas",
		texto: "Modifique a lista de atletas.",
		listaBotoes: creatListaBotoes(info, "atletas")
	});
}

export function infoTabelas(info) {
	return ({
		titulo: "BADBONS OPEN",
		subTitulo: "Tabela de classificação",
		texto: "Tenha acesso ao ranking de cada grupo.",
		listaBotoes: creatListaBotoes(info, "tabela")
	});
}

export function infoJogos(info) {
	return ({
		titulo: "BADBONS OPEN",
		subTitulo: "Lista de jogos",
		texto: "Tenha acesso ao resultado de cada jogo.",
		listaBotoes: creatListaBotoes(info, "jogos")
	});
}