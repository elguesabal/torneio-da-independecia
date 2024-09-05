function creatLinks(categoria, modalidades, rota) {
	let links = [];
	const urlParams = new URL(window.location.href); // TIRAR ISSO QUANDO EU FIZER UMA SECAO COMPLETA PRA ADM
	const adm = urlParams.searchParams.get("adm"); // TIRAR ISSO QUANDO EU FIZER UMA SECAO COMPLETA PRA ADM

	modalidades.forEach((modalidade, i) => {
		links.push(`./${rota}?categoria=${categoria}&modalidade=${modalidade}`);
		if (adm) links[i] += "&adm=true"; // TIRAR ISSO QUANDO EU FIZER UMA SECAO COMPLETA PRA ADM
	});
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