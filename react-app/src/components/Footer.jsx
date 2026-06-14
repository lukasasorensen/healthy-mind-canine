const certs = [
  {
    alt: 'Certified Professional Dog Trainer certification',
    src: './assets/CPDT.png',
  },
  {
    alt: 'Fear Free certification',
    src: './assets/FEAR_FREE_CERT.png',
  },
  {
    alt: 'SAPDT certification',
    src: './assets/sapdt.png',
  },
  {
    alt: 'Family Dog Mediator certification',
    src: './assets/FAMILY_DOG_MEDIATOR_LOGO.png',
  },
];

const socials = [
  { href: 'https://www.facebook.com/HealthyMindCanine', label: 'Facebook', icon: 'f' },
  { href: 'https://www.instagram.com/healthymindcanine/', label: 'Instagram', icon: 'ig' },
  { href: 'mailto:lauren@healthymindcanine.com', label: 'Email', icon: '@' },
  { href: 'tel:+16125679390', label: 'Phone', icon: '☎' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.label}
              className="social-link"
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-link__icon">{social.icon}</span>
              <span>{social.label}</span>
            </a>
          ))}
        </div>

        <div className="footer__contact">
          <a href="mailto:lauren@healthymindcanine.com">lauren@healthymindcanine.com</a>
          {' | '}
          <a href="tel:+16125679390">(612) 567-9390</a>
        </div>

        <div className="footer__certs">
          {certs.map((cert) => (
            <img key={cert.alt} src={cert.src} alt={cert.alt} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
