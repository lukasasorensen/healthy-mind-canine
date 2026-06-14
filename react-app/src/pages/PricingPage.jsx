import Footer from '../components/Footer';
import PageMeta from '../components/PageMeta';

const pricing = [
  {
    title: 'Initial Consultation and Assessment',
    price: '$175',
    details: [
      '1.5-2hr private Zoom session',
      "Comprehensive review of your dog's history & goals",
      'Live separation anxiety assessment of your dog',
      'Overview of what training will look like & instructions for getting started',
      "Recommendations for life adjustments to improve your dog's well-being & relationship with you",
      'Discuss tech setup',
      'A recording of your session to refer back to',
    ],
  },
  {
    title: '4 Week Program',
    price: '$800',
    details: [
      '4 weekly zoom check-ins',
      '5 individualized training plans for the pet parent to conduct each week',
      'Access to the SA Pro Trainer App',
      'Daily messaging support M - F',
      'Unlimited video review from your trainer',
      'As needed data driven reports & communication with your vet.',
    ],
  },
  {
    title: '8 Week Program',
    price: '$1,350 (save $250!)',
    details: [
      '8 weekly zoom check-ins',
      '5 individualized training plans for the pet parent to conduct each week',
      'Access to the SA Pro Trainer App',
      'Daily messaging support M - F',
      'Unlimited video review from your trainer',
      'As needed data driven reports & communication with your vet.',
    ],
  },
];

function PricingPage() {
  return (
    <div className="page">
      <PageMeta
        title="Pricing | Healthy Mind Canine | Separation Anxiety Programs"
        description="Learn more about our expert separation anxiety dog training packages and pricing. Get custom coaching, training, & support for you and your dog today!"
        path="/pricing"
      />

      <section className="page-section">
        <div className="page-section__inner">
          <h1 className="section-title section-title--secondary">Pricing</h1>
          <p className="pricing-disclaimer">
            <i>*Initial Consult is required before purchasing programs.</i>
          </p>

          <div className="pricing-grid">
            {pricing.map((plan) => (
              <article key={plan.title} className="pricing-card">
                <h3>{plan.title}</h3>
                <p className="price">{plan.price}</p>
                <ul>
                  {plan.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

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

      <Footer />
    </div>
  );
}

export default PricingPage;
