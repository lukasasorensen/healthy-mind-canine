import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiscoveryCallButton from '../components/DiscoveryCallButton';
import Footer from '../components/Footer';
import PageMeta from '../components/PageMeta';

const features = [
  {
    icon: '🐶',
    title: 'Customized training',
    copy:
      "Every dog is an individual. Therefore, we craft custom, easy to follow, training plans each day based on how your dog did the previous day. We take the guesswork out of training, giving you, and your furry family member the best chance of resolution.",
  },
  {
    icon: '💻',
    title: '100% Virtual',
    copy:
      "Where you live should not be a barrier to expert help. Working virtually allows us to work with pet owners no matter where they live, support each client up to 5 days a week and allows us to see your dog's behavior in their typical environment.",
  },
  {
    icon: '🎓',
    title: '1 on 1 Training',
    copy:
      'Our trainers only take on a small number of cases so we can provide individualized support to each one of our clients. You are not just a client to us. You and your dog are part of the Healthy Mind Canine family! We love them too!',
  },
];

function HomePage() {
  const navigate = useNavigate();
  const hopeRef = useRef(null);
  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setAnimateButton(true);
    }, 10000);

    const stop = window.setTimeout(() => {
      setAnimateButton(false);
    }, 12000);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(stop);
    };
  }, []);

  return (
    <div className="page">
      <PageMeta
        title="Healthy Mind Canine | Separation Anxiety Dog Training"
        description="Our certified dog separation anxiety experts provide custom coaching & training for pets and their guardians no matter where they live. We use the most effective methods available to give you the best chance of success!"
        path="/"
      />

      <section
        className="hero"
        style={{ backgroundImage: 'url(./assets/woman-shaking-hands-with-dog.jpg)' }}
      >
        <div className="hero__content">
          <h1>Struggling with Dog Separation Anxiety?</h1>
          <div className="hero-copy">
            <p>
              Do you feel like you have tried absolutely everything to fix your dog&apos;s
              separation anxiety and you&apos;re still coming home to a destroyed space, angry
              neighbors, and a panicked dog?
            </p>
            <p>
              We get it, you&apos;re sad to see your pup suffering, you&apos;re at your wits end,
              and you don&apos;t know how else to help your dog.
            </p>
          </div>

          <div style={{ marginTop: '28px' }}>
            <DiscoveryCallButton className={animateButton ? 'heartbeat' : ''} />
          </div>

          <button
            type="button"
            className="ghost-button scroll-button"
            onClick={() => hopeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            Learn More ↓
          </button>
        </div>
      </section>

      <section ref={hopeRef} className="page-section accent-banner">
        <div className="page-section__inner accent-banner__copy">
          <h2 className="section-title section-title--secondary">There is Hope!</h2>
          <div className="section-copy section-copy--card">
            <p>
              Our Certified Separation Anxiety Behavior Consultants are here for you and can help
              even in the most severe cases.
            </p>
            <p className="emphasis">
              We live &amp; breathe separation anxiety. In fact, it&apos;s all we do!
            </p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--tight">
        <div className="page-section__inner">
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-card__icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <h2 className="card-title">{feature.title}</h2>
                <p>{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--tight">
        <div className="page-section__inner home-closing">
          <img
            className="home-closing__image"
            src="./assets/sleepy-puppy.jpg"
            alt="Relaxed puppy resting peacefully"
          />
          <div className="section-copy">
            <p>
              Imagine returning home to a dog peacefully lounging, free from barking, howling, or
              home destruction. With a specialist&apos;s assistance, dogs with separation anxiety can
              learn to relax at home.
            </p>
          </div>
          <div style={{ marginTop: '28px' }}>
            <button
              type="button"
              className="secondary-button"
              onClick={() => navigate('/services')}
            >
              View Training Programs
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
