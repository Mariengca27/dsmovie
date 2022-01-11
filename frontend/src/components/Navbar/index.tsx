import { ReactComponent as GitHubIcon } from 'assets/Vector.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Mariengca27" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GitHubIcon />
                            <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>);
}

export default Navbar;