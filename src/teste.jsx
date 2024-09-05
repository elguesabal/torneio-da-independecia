import { useState, useEffect } from "react";
import axios from "axios";

// export default function Teste() {
// 	// Estado para armazenar os dados da API
// 	const [dados, setDados] = useState([]);
// 	const [carregando, setCarregando] = useState(true);
// 	const [erro, setErro] = useState(null);

// // console.log("bbbb") // ERRADO O useEffect ESTA CAUSANDO DUPLICAMENTO NA FUNCAO Teste TODA

// 	// useEffect para fazer a requisição quando o componente for montado
// 	useEffect(() => {
// 		// Função assíncrona para buscar os dados da API
// 		const buscarDados = async () => {
// 			try {
// 				const resposta = await axios.get('https://jsonplaceholder.typicode.com/posts');
// 				setDados(resposta.data); // Armazena os dados no estado
// 			} catch (erro) {
// 				setErro(erro.message); // Armazena o erro no estado se houver
// 			} finally {
// 				setCarregando(false); // Define o estado de carregamento como falso
// 			}
// 		};

// 		buscarDados(); // Chama a função para buscar os dados
// 	}, []); // [] faz com que o useEffect execute apenas uma vez após a montagem do componente

// // console.log("aaaa") // ISSO ACONTECE DUAS VZS PQ O useEffect FUNCIONA DE FORMA PARECIDA COM O fork, thread EM c ou goto EM c++ // ERRADO O useEffect ESTA CAUSANDO DUPLICAMENTO NA FUNCAO Teste TODA

// 	// Exibe uma mensagem enquanto os dados estão sendo carregados
// 	if (carregando) {
// 		return <p>Carregando...</p>;
// 	}

// 	// Exibe uma mensagem de erro se a requisição falhar
// 	if (erro) {
// 		return <p>Ocorreu um erro: {erro}</p>;
// 	}

// 	// Renderiza os dados recebidos da API
// 	return (
// 		<div>
// 			<h1>Posts do Blog</h1>
// 			<ul>
// 				{dados.map(post => (
// 					<li key={post.id}>
// 						<h2>{post.title}</h2>
// 						<p>{post.body}</p>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }





export default function Teste() {
	const [dados, setDados] = useState([]);
	const [carregando, setCarregando] = useState(true);
	const [erro, setErro] = useState(null);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((resposta) => setDados(resposta.data))
		.catch((erro) => setErro(erro.message))
		.finally(() => setCarregando(false));
	}, []);
	console.log("teste")

	if (carregando) return <p>Carregando...</p>;
	if (erro) return <p>Ocorreu um erro: {erro}</p>;

	return (
		<div>
			<h1>Posts do Blog</h1>
			<ul>
				{dados.map(post => (
					<li key={post.id}>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}