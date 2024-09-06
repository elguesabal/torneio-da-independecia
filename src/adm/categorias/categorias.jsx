import { useState, useEffect } from "react";

export default function Categorias() {
	// const [jogos, setJogos] = useState({});
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState(null);

	useEffect(() => {
		// axios.get(url + "/home?info=jogos")
		// .then((res) => {
		// 	setAtletas(infoAtletas(res.data));
		// 	setTabelas(infoTabelas(res.data));
		// 	setJogos(infoJogos(res.data));
		// })
		// .catch((erro) => setErro(erro.message))
		// .finally(() => setCarregando(false));
	}, []);

	if (carregando) return (<p>Carregando...</p>);
	if (erro) return (<p>Ocorreu um erro: {erro}</p>);

	return (
		<>
			aaaaaa
		</>
	);
}