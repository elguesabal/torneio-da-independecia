function creatLinks(categoria, modalidades, rota) {
	let links = [];

	modalidades.forEach((modalidade, i) => links.push(`./${rota}?categoria=${categoria}&modalidade=${modalidade}`));
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

export function infoTabelas(info) {
	return ({
		titulo: "Torneio da independência - BADBONS",
		subTitulo: "Tabela de classificação",
		texto: "Tenha acesso ao ranking de cada grupo.",
		listaBotoes: creatListaBotoes(info, "tabela")
	});
}

export function infoJogos(info) {
	return ({
		titulo: "Torneio da independência - BADBONS",
		subTitulo: "Lista de jogos",
		texto: "Tenha acesso ao resultado de cada jogo.",
		listaBotoes: creatListaBotoes(info, "jogos")
	});
}