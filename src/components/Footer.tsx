import "../styles/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="social-links">
            <a
              href="https://www.instagram.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-element">
                <img src="src\assets\social\instagram.svg" />
                Instagram
              </div>
            </a>
            <a
              href="https://twitter.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-element">
                <img src="src\assets\social\twitter_x.svg" />
                Twitter
              </div>
            </a>
            <a
              href="https://github.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-element">
                <img src="src\assets\social\github.svg" />
                Github
              </div>
            </a>
            <a
              href="https://github.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-element">
                <img src="src\assets\social\linkedin.svg" />
                LinkedIn
              </div>
            </a>
          </div>
          <div className="nav-links">
            <a href="/home">Home</a>
            <a href="/my-work">My Work</a>
            <a href="/resume">Resume</a>
            <a href="/contact-me">Contact Me</a>
          </div>
        </div>
        <div className="copyright">
          © 2023 David García Montenegro. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}

export default Footer;
