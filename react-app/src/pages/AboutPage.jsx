import Footer from '../components/Footer';
import PageMeta from '../components/PageMeta';

function AboutPage() {
  return (
    <div className="page">
      <PageMeta
        title="About Us | Healthy Mind Canine | Dog Separation Anxiety Expert"
        description="Meet our multi certified separation anxiety dog training expert, Lauren Sorensen. She prioritizes bringing her clients the most effective and humane methods available."
        path="/about"
      />

      <section className="page-section">
        <div className="page-section__inner">
          <h1 className="section-title">Lauren Sorensen</h1>
          <p className="about-credentials" style={{ textAlign: 'center' }}>
            CSAP-BC • CPDT-KA • FFCP • FDM
          </p>

          <div className="split-grid" style={{ marginTop: '32px' }}>
            <div className="about-photo">
              <img src="./assets/ABOUT_PIC.png" alt="Lauren Sorensen" />
            </div>

            <div className="about-copy">
              <p>
                Lauren, a seasoned dog trainer with almost 10 years of professional experience, is
                your trusted resource for separation anxiety dog training. Her certification journey
                began with an education from the Karen Pryor Academy For Professional Dog Trainers.
                She has since achieved additional certifications, including Certified Pet Dog
                Trainer, Fear-Free Certified Trainer, Family Dog Mediator, and Certified Separation
                Anxiety Pro Behavior Consultant.
              </p>
              <p>
                In an industry lacking official regulations, Lauren firmly believes in the
                importance of voluntary certification, offering peace of mind to pet parents in
                their pursuit of a qualified professional.
              </p>
              <p>
                Lauren&apos;s extensive background encompasses teaching training classes, private
                lessons, shelter behavior work, board and train, and day camp training. Her
                dedication to addressing separation anxiety stems from her time as a behavior
                specialist at an animal shelter, where she recognized a pressing need for resources
                in this area.
              </p>
              <p>
                Separation anxiety is a challenge that many dog trainers shy away from due to its
                intricate nature and the substantial support it demands. Because of this Lauren
                decided to pursue specialized certification and launch her own business, ensuring
                pet owners worldwide can access expert help.
              </p>
              <p>
                Lauren prioritizes ongoing education to provide clients with the most effective and
                up-to-date training methods. Her commitment centers on humane training practices,
                firmly grounded in the latest scientific research, assuring pet owners that she will
                never engage in methods that harm or distress their dogs. You can trust Lauren to
                be your partner in achieving a well-balanced and confident canine companion!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;
