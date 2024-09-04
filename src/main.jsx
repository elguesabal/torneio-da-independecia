import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./main.css";
import "./componentes/load/load.css";

import "./componentes/cards/desenvolvedor.css";
import "./jogos/jogos.css";
import "./jogos/adm.css";

import Home from "./home/home.jsx";
import Tabela from './tabela/tabela.jsx';
import Jogos from './jogos/jogos.jsx';
import Atletas from './atletas/Atletas.jsx';


import Teste from './teste.jsx';


createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/tabela" element={<Tabela />} />
			<Route path="/jogo" element={<Jogos />} />
			<Route path="/update/atletas" element={<Atletas />} />


			<Route path="/teste" element={<Teste />} />
		</Routes>
	</BrowserRouter>
);