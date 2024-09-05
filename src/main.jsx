import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./main.css";
import "./componentes/load/load.css";

import "./componentes/cards/desenvolvedor.css";
import "./user/jogos/jogos.css";
import "./user/jogos/adm.css";

import Atletas from './adm/atletas/Atletas.jsx';

import Home from "./user/home/home.jsx";
import Tabela from './user/tabela/tabela.jsx';
import Jogos from './user/jogos/jogos.jsx';

import Teste from './teste.jsx';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path="/adm/atletas" element={<Atletas />} />

			<Route path="/" element={<Home />} />
			<Route path="/tabela" element={<Tabela />} />
			<Route path="/jogos" element={<Jogos />} />

			<Route path="/teste" element={<Teste />} />
		</Routes>
	</BrowserRouter>
);