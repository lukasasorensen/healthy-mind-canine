import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/services', label: 'Separation Anxiety' },
  { to: '/resources', label: 'Resources' },
  { to: '/faq', label: 'FAQ' },
  { to: '/about', label: 'Meet the Trainer' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <Link className="site-logo" to="/" onClick={closeMenu}>
          <img src="./assets/healthy-mind-canine-logo.png" alt="Healthy Mind Canine" />
        </Link>

        <button
          type="button"
          className={`hamburger${menuOpen ? ' is-active' : ''}`}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label="Open Menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
