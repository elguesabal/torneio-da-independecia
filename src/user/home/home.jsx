import { useState, useEffect } from "react";
import { infoTabelas, infoJogos } from "./info.js";
import axios from "axios";
import { url } from "../../url.js";
import Load from "../../componentes/load/load.jsx";
import CardLinks from "../../componentes/cards/card links.jsx";
import Desenvolvedor from "../../componentes/cards/desenvolvedor.jsx";
import Feedback from "./feedback.jsx";

export default function Home() {
	const [tabelas, setTabelas] = useState({});
	const [jogos, setJogos] = useState({});
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState(null);

	useEffect(() => {
		axios.get(url + "/home?info=jogos")
		.then((res) => {
			setTabelas(infoTabelas(res.data));
			setJogos(infoJogos(res.data));
		})
		.catch((erro) => setErro(erro.message))
		.finally(() => setCarregando(false));
	}, []);

	if (carregando) return (<Load />);
	if (erro) return (<Load error="yes" />);

	return (
		<div id="home" className="pb-5 pt-4">
			<Load close="yes" />
			<div className="d-flex flex-column align-items-stretch justify-content-center mx-2 opacity-75">
				<CardLinks info={tabelas} />
				<CardLinks info={jogos} />
			</div>
			<Feedback />
			<Desenvolvedor />
		</div>
	);
}