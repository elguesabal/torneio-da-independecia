import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../url.js";
import Load from "../componentes/load/load.jsx";

export default function Atletas() {
	const [atletas, setAtletas] = useState([]);
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState(null);
	const urlParams = new URL(window.location.href);
	const categoria = urlParams.searchParams.get("categoria");
	const modalidade = urlParams.searchParams.get("modalidade");

	// console.log(categoria, modalidade)

	useEffect(() => {
		axios.get(`${url}/tabela?categoria=${categoria}&modalidade=${modalidade}`)
		.then((res) => {
			setAtletas(res.data);
			// console.log(res.data)
			setCarregando(false);
		})
		.catch((erro) => {
			setErro(erro.message);
			setCarregando(false);
		});
	}, []);


	if (carregando) return (<Load />);
	if (erro) return (<>Erro ao carregar pagina: {erro}</>);

	return (
		<>
			{atletas.map((atleta, i) => (
				<div key={i} className="mb-3">
					<input type="text" className="form-control" id={"atleta" + i} placeholder="Adicione um atleta..." value={atleta.nome} />
				</div>
			))}
		</>
	);
}