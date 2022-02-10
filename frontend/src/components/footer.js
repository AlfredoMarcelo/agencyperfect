const Footer = (props) => {
  return (
  <footer className="container-fluid bg-dark text-light text-center py-2">
      <p>Todos los derechos reservados</p>
      <p>Contacto: <i className="bi bi-envelope"> alfredo.supanta.26@gmail.com</i> </p>
      <p className="d-flex justify-content-center "><a className="text-light" href="https://github.com/AlfredoMarcelo"><i className="bi bi-github h4"></i></a><a className="text-light" href="https://www.linkedin.com/in/alfredo-supanta/"><i className="bi bi-linkedin h4 mx-3"></i></a><a className="text-light" href="https://www.behance.net/alfredosupanta"><i className="bi bi-behance h4"></i></a></p>
  </footer>
  );
};
export default Footer;
