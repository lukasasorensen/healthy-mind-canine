import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const mainLinks = [
  { to: '/resources', label: 'Resources' },
  { to: '/faq', label: 'FAQ' },
  { to: '/about', label: 'Meet the Trainer' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <Link className="site-logo" to="/" onClick={closeAll}>
          <img src="./assets/healthy-mind-canine-logo.png" alt="Healthy Mind Canine" />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          Menu
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}
          aria-label="Primary"
        >
          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-dropdown__trigger"
              onClick={() => setDropdownOpen((isOpen) => !isOpen)}
              aria-expanded={dropdownOpen}
            >
              Separation Anxiety
            </button>
            {dropdownOpen ? (
              <div className="nav-dropdown__menu">
                <NavLink to="/separation-anxiety" onClick={closeAll}>
                  Separation Anxiety
                </NavLink>
                <NavLink to="/resources" onClick={closeAll}>
                  Resources
                </NavLink>
                <NavLink to="/faq" onClick={closeAll}>
                  FAQ
                </NavLink>
                <NavLink to="/blog" onClick={closeAll}>
                  Blog
                </NavLink>
              </div>
            ) : null}
          </div>

          {mainLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={closeAll}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
