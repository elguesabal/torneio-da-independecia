import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "./main.css";
import "./componentes/load/load.css";

import "./componentes/cards/desenvolvedor.css";


import Home from "./home/home.jsx";
import Tabela from './tabela/tabela.jsx';


createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/tabela" element={<Tabela />} />
			{/* <Route path="/jogo" element={} /> */}
		</Routes>
	</BrowserRouter>
);