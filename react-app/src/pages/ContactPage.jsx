import EmbedFrame from '../components/EmbedFrame';
import PageMeta from '../components/PageMeta';

function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact Us | Healthy Mind Canine | Dog Separation Anxiety Training"
        description="Contact us about our customized separation anxiety dog training. It all starts with a virtual initial consultation so we can assess your dog and walk you through our training program. Don't wait! Get started today and regain your freedom."
        path="/contact"
      />
      <EmbedFrame
        src="https://docs.google.com/forms/d/e/1FAIpQLSdqVyYRfMboPfCJesWLbhUYjXsTwnTxLFZE6hvUoKx9OEN82g/viewform?embedded=true"
        title="Healthy Mind Canine contact form"
        className="contact-frame"
        loadingText="Loading Contact Form..."
      />
    </>
  );
}

export default ContactPage;
