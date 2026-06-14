import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiscoveryCallButton from '../components/DiscoveryCallButton';
import Footer from '../components/Footer';
import PageMeta from '../components/PageMeta';

const pricing = [
  {
    title: 'Initial Consultation and Assessment',
    price: '$200',
    details: [
      '90 minute private session',
      "Review of your dog's history and goals",
      'Assessment of your dog',
      'Overview of what training looks like',
      'Discuss tech set up',
      'A recording of your session',
      'Resources & handouts',
    ],
  },
  {
    title: '4 Week Program',
    price: '$600',
    note: '*Consult Required',
    details: [
      '4 weekly zoom check-ins',
      '5 individualized training plans for the pet parent to conduct each week',
      'Access to the SA Pro Trainer App',
      'Daily messaging support M - F',
      'Unlimited video review from your trainer',
      'As needed reports & communication with your vet.',
    ],
  },
  {
    title: '8 Week Program',
    price: '$1,075',
    originalPrice: '$1,200',
    note: '*Consult Required',
    details: [
      '8 weekly zoom check-ins',
      '5 individualized training plans for the pet parent to conduct each week',
      'Access to the SA Pro Trainer App',
      'Daily messaging support M - F',
      'Unlimited video review from your trainer',
      'As needed reports & communication with your vet.',
    ],
  },
];

const requirements = [
  {
    icon: '📶',
    key: 'wifi',
    copy: 'High speed internet connection.',
  },
  {
    icon: '💻',
    key: 'laptop',
    copy: 'A laptop or tablet for video chat.',
  },
  {
    icon: '🎥',
    key: 'camera',
    copy: (
      <>
        A Home Monitoring Camera
        <br />
        <span>
          (we recommend the{' '}
          <a
            href="https://www.wyze.com/products/wyze-cam?related_selling_plan=41618559008930"
            target="_blank"
            rel="noreferrer"
          >
            Wyze
          </a>{' '}
          camera)
        </span>
      </>
    ),
  },
  {
    icon: '📱',
    key: 'mobile',
    copy: 'A smart phone to access our training app and your home cameras.',
  },
];

function ServicesPage() {
  const navigate = useNavigate();
  const infoRef = useRef(null);
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
        title="About Separation Anxiety | Healthy Mind Canine | Virtual Dog Training"
        description="Virtual separation anxiety dog training that actually works. No more noise complaints or household destruction. We take the guesswork out of training your dog. Learn more about our methods & how we can help you regain your freedom!"
        path="/services"
      />

      <div className="floating-cta">
        <DiscoveryCallButton className={animateButton ? 'heartbeat' : ''} />
      </div>

      <section
        className="hero"
        style={{ backgroundImage: 'url(./assets/DogOwnerStock-1.png)' }}
      >
        <div className="hero__content">
          <h1>Separation Anxiety Training That Works!</h1>
          <button
            type="button"
            className="ghost-button scroll-button"
            onClick={() => infoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            Learn More
          </button>
        </div>
      </section>

      <section ref={infoRef} className="page-section">
        <div className="page-section__inner">
          <h2 className="section-title">What Is Separation Anxiety?</h2>
          <div className="section-copy">
            <p>
              Separation anxiety in dogs closely resembles human phobias, akin to a fear of
              heights, spiders, or enclosed spaces. Essentially, It&apos;s a profound fear of being
              left alone. Dogs with separation anxiety often exhibit symptoms of panic, including
              pacing, panting, trembling, drooling, vocalizing, accidents, and destructive
              behaviors.
            </p>
            <p>
              These symptoms can worsen if unaddressed, posing risks to the dog&apos;s physical and
              mental well-being. It&apos;s important to understand that your dog is not acting out of
              spite but is genuinely experiencing panic and they need your help! Our specialized
              services are dedicated to helping your dog overcome separation anxiety and improve
              their well-being.
            </p>
          </div>
        </div>
      </section>

      <section
        className="page-section service-method"
        style={{ backgroundImage: 'url(./assets/goldencutiepie.jpg)' }}
      >
        <div className="page-section__inner">
          <article className="content-card">
            <h2 className="section-title">What Is Our Training Method?</h2>
            <p>
              Our training approach relies on a proven method called systematic desensitization. We
              introduce your dog to brief, stress-free periods of being home alone, gradually
              extending the duration at a pace that suits your dog&apos;s comfort level. Over time, your
              dog becomes increasingly at ease with longer periods of alone time, eventually
              reaching the point where they can be left alone as needed.
            </p>
            <p>
              Research indicates that this method is not only the most humane but also the most
              effective way to address separation anxiety, offering lasting results. Although it
              sounds simple, systematic desensitization can be challenging for pet parents to
              implement on their own. That&apos;s why it&apos;s essential to seek the expertise of a
              separation anxiety specialist for effective and lasting solutions.
            </p>
            <h3>Training is done 100% virtual</h3>
            <p>
              Separation anxiety training is entirely virtual, allowing us to observe your dog&apos;s
              natural behavior in their home environment. Throughout the training program, it is
              important that you avoid leaving your dog alone unless it&apos;s part of the day&apos;s
              training assignment.
            </p>
            <p>
              Consistently subjecting your dog to stressful and anxious alone time only validates
              their fear and may impede or even prevent their recovery. To address this, we
              recommend temporarily enlisting the help of daycares, pet sitters, family, friends,
              or neighbors.
            </p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner">
          <h2 className="section-title section-title--secondary">
            Separation Anxiety Training Services
          </h2>
          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article key={plan.title} className="pricing-card">
                <h3>{plan.title}</h3>
                <p className="price">
                  {plan.originalPrice ? <strike>{plan.originalPrice}</strike> : null}
                  {plan.originalPrice ? ' ' : ''}
                  {plan.price}
                </p>
                {plan.note ? <span className="note">{plan.note}</span> : null}
                <ul>
                  {plan.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="pricing-disclaimer">
            <i>*After a program, we can discuss other options for ongoing training.</i>
          </p>

          <div className="content-card" style={{ marginTop: '28px' }}>
            <div className="dotted-row">
              <p>1 Hour as-needed Session</p>
              <div className="dotted-row__fill" />
              <p>$175</p>
            </div>
            <p className="table-note">*to supplement DIY programs</p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--tight">
        <div className="page-section__inner">
          <h2 className="section-title section-title--secondary">What You Will Need For Training</h2>
          <div className="split-grid" style={{ marginTop: '30px' }}>
            <div>
              <ul className="requirements-list">
                {requirements.map((item) => (
                  <li key={item.key}>
                    <span className="inline-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span>{item.copy}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <img src="./assets/dog-on-computer.png" alt="Dog using a computer during virtual training" />
            </div>
          </div>

          <div className="chaos-to-calm-cta">
            <div className="chaos-to-calm-inner">
              <p className="chaos-to-calm-heading">
                Are you ready to go from <em>chaos</em> to <strong>calm</strong>?
              </p>
              <div className="chaos-to-calm-buttons">
                <button type="button" className="secondary-button" onClick={() => navigate('/contact')}>
                  Yes, I&apos;m Ready!
                </button>
                <span className="or-divider">or</span>
                <DiscoveryCallButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ServicesPage;
