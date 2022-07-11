/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                Navbar
                </a>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to='/' className="nav-link active" aria-current="page">
                    Home
                    </Link>
                    <Link to='/Products' className='nav-link'>
                    Products
                    </Link>
                    <a className="nav-link" href="#">
                    Pricing
                    </a>
                    <a className="nav-link disabled">Disabled</a>
                </div>
                </div>
            </div>
            </nav>
        </>
    );
};

export {Header};