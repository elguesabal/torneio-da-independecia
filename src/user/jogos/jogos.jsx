import { useEffect } from "react";
import Load from "../../componentes/load/load.jsx";
import user from "./user.js";
import adm from "./adm.js";

export default function Jogos() {
	useEffect(() => {
		const params = new URL(window.location.href);
		const categoria = params.searchParams.get("categoria");
		const modalidade = params.searchParams.get("modalidade");
		(params.searchParams.get("adm") == "true") ? adm(categoria, modalidade) : user(categoria, modalidade);
	}, []);

	return (
		<>
			<Load close="yes" />
		
			<div id="loadAdm" className="load fixed-top">
				<div id="spinner"><div className="spinner-border text-primary enviando" role="status"></div></div>
			</div>

			<div id="loadSenha" className="load fixed-top">
				<form id="formSenha" className="row g-3 formSenha" method="get">
					<div className="col-auto mx-auto">
						<input type="password" id="senha" className="form-control" aria-describedby="passwordHelpInline" required />
					</div>
					<button type="submit" className="btn btn-primary">Ok</button>
				</form>
			</div>

			<button type="button" className="btn btn-primary" id="botaoAdm">Enviar alterações</button>

			<div className="container mt-5">
				<div id="jogos" className="table-responsive"></div>
			</div>
		</>
	);
}