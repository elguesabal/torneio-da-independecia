import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./main.css";
import "./componentes/load/load.css";
import "./componentes/cards/desenvolvedor.css";
import "./componentes/jogos/jogos.css";

import HomeAdm from "./adm/home/homeAdm.jsx";
import NovaCategoria from './adm/categorias/novaCategoria.jsx';
import Categorias from "./adm/categorias/categorias.jsx";
import Atletas from "./adm/atletas/atletas.jsx";
import JogosAdm from "./adm/jogos/jogos.jsx";

import Home from "./user/home/home.jsx";
import Tabela from "./user/tabela/tabela.jsx";
import Jogos from "./user/jogos/jogos.jsx";

import Teste from "./teste.jsx";

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path="/adm" element={<HomeAdm />} />
			<Route path="/adm/novacategoria" element={<NovaCategoria />} />
			<Route path="/adm/categorias" element={<Categorias />} />
			<Route path="/adm/atletas" element={<Atletas />} />
			<Route path="/adm/tabela" element={<Tabela />} />
			<Route path="/adm/jogos" element={<JogosAdm />} />

			<Route path="/" element={<Home />} />
			<Route path="/tabela" element={<Tabela />} />
			<Route path="/jogos" element={<Jogos />} />

			<Route path="/teste" element={<Teste />} />
		</Routes>
	</BrowserRouter>
);