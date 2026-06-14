import Footer from '../components/Footer';
import PageMeta from '../components/PageMeta';

const sections = [
  {
    title: 'Books',
    links: [
      {
        href: 'https://www.amazon.com/Be-Right-Back-Overcome-Separation/dp/1999296605/ref=sr_1_3?crid=2JVN3WF1TE1T2&keywords=Julie+naismith&qid=1660143544&sprefix=julie+naismith%2Caps%2C96&sr=8-3',
        label: 'Be Right Back! How to overcome separation anxiety and regain your freedom.',
      },
      {
        href: 'https://www.amazon.com/Right-Puppy-Separation-Anxiety-Step/dp/1999296621/ref=sr_1_1_sspa?crid=2JVN3WF1TE1T2&keywords=Julie+naismith&qid=1660143544&sprefix=julie+naismith%2Caps%2C96&sr=8-1-spons&psc=1',
        label: 'Be right Back! Puppy Separation Anxiety Edition.',
      },
      {
        href: 'https://www.amazon.com/Separation-Anxiety-Dogs-Generation-Treatment-ebook/dp/B08LRPXSRP/ref=sr_1_1?crid=3LWXYV0TH3EN9&keywords=separation+anxiety+in+dogs+book&qid=1660143700&sprefix=separation+anxiety+in+dogs+book%2Caps%2C82&sr=8-1',
        label: 'Separation Anxiety In Dogs: Next Generation Treatment Protocols And Practices.',
      },
    ],
  },
  {
    title: 'Podcasts',
    links: [
      {
        href: 'https://open.spotify.com/show/5TOhsYqGCGsuQ6WoS1HrmM',
        label: 'Be Right Back! The separation anxiety podcast.',
      },
      {
        href: 'https://pawsandreward.com/episode5/',
        label: 'Separation related behaviors with Jackie Johnson',
      },
      {
        href: 'https://www.trainingwithally.com/the-podcast',
        label: 'Home Alone And Comfortable As Heck.',
      },
      {
        href: 'https://www.believeinyour.dog/podcast',
        label: 'The Believe In Your Dog Podcast.',
      },
    ],
  },
  {
    title: 'Blogs',
    links: [
      {
        href: 'https://www.believeinyour.dog/blog',
        label: 'Believe in your dog.',
      },
      {
        href: 'https://malenademartini.com/blog/',
        label: 'Melena Demartini.',
      },
      {
        href: 'https://rescuedbytraining.com/tag/separation-anxiety/',
        label: 'Rescued By Training.',
      },
    ],
  },
];

function ResourcesPage() {
  return (
    <div className="page">
      <PageMeta
        title="Resources | Healthy Mind Canine | Separation Anxiety"
        description="We provide separation anxiety dog training resources so you can learn how to help your dog recover from their separation anxiety."
        path="/resources"
      />

      <section className="page-section">
        <div className="page-section__inner">
          <h1 className="section-title section-title--secondary">Resources</h1>

          {sections.map((section) => (
            <div key={section.title} className="link-category">
              <h2>{section.title}</h2>
              <div className="link-card-grid">
                {section.links.map((link) => (
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
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ResourcesPage;
