export default function Desenvolvedor() {
	return (
		<div className="row g-0 bg-body-secondary mx-4 mt-4 align-items-center bg-body-tertiary rounded">
			<div className="col-md-6 mb-md-0 p-3">
			<img src="/jose.jpg" className="w-100" alt="Foto do desenvolvedor deste site"/>
			</div>
			<div className="col-md-6 p-4 ps-md-0">
				<h5 className="mt-0">José Antonio, entusiasta de badminton, programador e desenvolvedor deste site.</h5>
				<div className="d-flex justify-content-evenly mt-4">
					<a href="https://wa.me/5521971178764?text=Vi%20seu%20site%20do%20BADBONS%20OPEN%20e%20estou%20entrando%20em%20contato!" className="icon icon--whatsapp" target="_blank"><i className="fab fa-whatsapp"></i></a>
					<a href="https://www.linkedin.com/in/jos%C3%A9-antonio-b14160240/" className="icon icon--linkedin" target="_blank"><i className="ri-linkedin-line"></i></a>
					<a href="https://github.com/elguesabal/" className="icon icon--github" target="_blank"><i className="ri-github-line"></i></a>
				</div>
			</div>
		</div>
	);
}