import { useState, useEffect } from "react";
import { infoCategorias, infoAtletas, infoTabelas, infoJogos } from "./info.js";
import axios from "axios";
import { url } from "../../url.js";
import Load from "../../componentes/load/load.jsx";
import CardLinks from "../../componentes/cards/card links.jsx";

export default function HomeAdm() {
	const [categorias, setCategorias] = useState([]);
	const [atletas, setAtletas] = useState({});
	const [tabelas, setTabelas] = useState({});
	const [jogos, setJogos] = useState({});
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState(null);

	useEffect(() => {
		axios.get(url + "/home?info=jogos")
		.then((res) => {
			setCategorias(infoCategorias(res.data));
			setAtletas(infoAtletas(res.data));
			setTabelas(infoTabelas(res.data));
			setJogos(infoJogos(res.data));
		})
		.catch((erro) => setErro(erro.message))
		.finally(() => setCarregando(false));
	}, []);

	if (carregando) return (<Load />);
	if (erro) return (<p>Ocorreu um erro: {erro}</p>);

	return (
		<div id="home">
			<Load close="yes" />
			<div className="d-flex flex-column align-items-stretch justify-content-center m-2 opacity-75">
				<div className="btn-group m-3">
			 		<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Editar categorias</button>
			 		<ul className="dropdown-menu dropdown-menu-dark dropdown-menu">
						<li><a className="dropdown-item text-center" href="./adm/novacategoria">Adicionar categoria</a></li> {/* CONTINUAR AKI ADICIONANDO E APAGANDO CATEGORIAS */}
						{categorias.map((categoria, i) => (
							<li key={i}><a className="dropdown-item text-center" href={`./adm/categorias?categoria=${categoria}`}>{categoria}</a></li>
						))}
			 		</ul>
			 	</div>
				<CardLinks info={atletas} />
				<CardLinks info={tabelas} />
				<CardLinks info={jogos} />
			</div>
		</div>
	);
}