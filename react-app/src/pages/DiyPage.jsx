import Footer from '../components/Footer';
import PageMeta from '../components/PageMeta';

const links = [
  {
    href: 'https://julienaismith.com/work-with-julie/#parents',
    label: 'Separation Anxiety Heros.',
  },
  {
    href: 'https://347611--julienaismith.thrivecart.com/separation-anxiety-heroes-app-only-usd/',
    label: 'Separation Anxiety Heros. (App Only Membership)',
  },
  {
    href: 'https://courses.malenademartini.com/?aff=26',
    label: 'Mission Possible.',
  },
  {
    href: 'https://347611--julienaismith.thrivecart.com/separation-anxiety-heroes-usd-new/',
    label: 'Separation Anxiety Dog DIY.',
  },
];

function DiyPage() {
  return (
    <div className="page">
      <PageMeta
        title="DIY Programs | Healthy Mind Canine | Dog Separation Anxiety Expert"
        description="Meet our multi certified separation anxiety dog training expert, Lauren Sorensen. She prioritizes bringing her clients the most effective and humane methods available."
        path="/diy"
      />

      <section className="page-section">
        <div className="page-section__inner">
          <h1 className="section-title section-title--secondary">DIY Programs</h1>
          <div className="link-card-grid">
            {links.map((link) => (
              <a
                key={link.href}
                className="link-card"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DiyPage;
