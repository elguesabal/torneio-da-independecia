import axios from "axios";
import { url } from "../../url";
import { inicioLoad, fimLoad } from "../../componentes/load/metodosLoad";

export default function Feedback() {
	function enviarFeedback() {
		const feedback = {
			nome: (document.getElementById("nomeFeedback").value) ? document.getElementById("nomeFeedback").value : "Anônimo",
			feedback: document.getElementById("feedback").value
		}
		if (!feedback.feedback) return (alert("Caixa de feedback vazia!"));
		inicioLoad();
		axios.post(`${url}/feedback`, feedback)
		.then((res) => alert("Feedback enviado!"))
		.catch((erro) => { console.log(erro), alert("Falha ao enviar feedback 😢") });
		fimLoad();
	}

	return (
		<div className="text-center m-4 row bg-body-tertiary rounded">
			<div className="card-header m-2">Feedback</div>
			<hr />
			<div className="card-body mx-3">
				<h5 className="card-title">Deixe seu feedback</h5>
				<p className="card-text">Sua opnião é importante para que melhoremos nas próximos edições!</p>
				<div className="mb-3">
					<input type="text" className="form-control" id="nomeFeedback" placeholder="Nome (opicional)" />
				</div>
				<div className="mb-3">
					<textarea className="form-control" id="feedback" rows="3" placeholder="Deixe seu feedback aqui!" />
				</div>
				<button className="btn btn-primary m-3" onClick={enviarFeedback}>Enviar feedback</button>
			</div>
		</div>
	);
}