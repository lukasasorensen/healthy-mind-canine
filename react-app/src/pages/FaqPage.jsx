import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PageMeta from '../components/PageMeta';

const faqs = [
  {
    question: 'What area does Healthy Mind Canine service?',
    answer:
      'We are located in Minnesota. Separation anxiety training is done 100% virtually. This allows us to help people and their pets no matter where they live in the world as long as they speak english and we can accommodate their time zone. We are in the Central Time zone.',
  },
  {
    question: 'Why is training done virtually?',
    answer:
      "Having the trainer work virtually allows us to see your dog's true behavior in their normal environment. It also allows us to work with each of our clients 5 days a week to provide an unmatched level of support!",
  },
  {
    question: "Why can't I leave my dog home alone outside of training?",
    answer:
      "This is recommended for a couple of reasons. Firstly, we do this to prevent unnecessary suffering. Secondly, it becomes very difficult to teach a dog that being alone is safe if they are continuing to have unsafe experiences. It's just further validating their fear of being alone which is counterproductive to your goal. We understand that emergencies do happen and we will work through it if something comes up and you have to leave your dog unexpectedly.",
  },
  {
    question: 'Can you guarantee results?',
    answer:
      'The method we use is studied to be the most effective method available for separation anxiety so far. However, we cannot guarantee results since we are working with live beings.',
  },
  {
    question: 'How long will training take?',
    answer:
      "The timeline is different for every dog. We always tell people to think in months, not weeks. Separation anxiety training is not a quick process and requires time, patience, and commitment to seeing a carefully crafted training plan to completion. Our job is to make this process smooth and attainable. Think of our training programs as a subscription that you renew until your dog's separation anxiety is resolved.",
  },
  {
    question: 'How much of my time will training take per week?',
    answer:
      'This depends on where your dog is at with their training. We recommend training 4-5 days per week for up to 30 minutes a day to start out. Once your dog reaches longer durations of alone time we may be able to reduce the frequency of training, but your time away from home for training sessions will become longer. You will finally be able to run some errands during training!',
  },
  {
    question: 'Do you do payment plans?',
    answer: (
      <>
        We currently do not offer payment plans. We do offer one off sessions and custom packages
        for owners who are enrolled in a DIY program and need supplemental help. Check out our{' '}
        <Link to="/diy">resources</Link> page for other options if working 1:1 with a trainer is
        not something you can do right now.
      </>
    ),
  },
  {
    question: 'Will I need to give my dog less affection or stop letting them sleep in my bed?',
    answer:
      'No, there is no evidence that these things contribute to separation anxiety. This is a common myth.',
  },
  {
    question: 'Will getting a second dog cure separation anxiety?',
    answer:
      "This rarely works. Most dogs experience separation anxiety from their humans and another pet is simply not a replacement for them. Often bringing another dog in can complicate the situation if it doesn't work. The new dog could also develop separation-related issues if they are exposed to your dog panicking. If you must try it, use a friend's dog a few times, and make sure you truly want a second dog.",
  },
];

function FaqPage() {
  return (
    <div className="page">
      <PageMeta
        title="FAQs | Healthy Mind Canine | Separation Anxiety"
        description="Learn more about our effective separation anxiety dog training programs on our FAQ page."
        path="/faq"
      />

      <section className="page-section">
        <div className="page-section__inner">
          <h1 className="section-title section-title--secondary">Frequently Asked Questions</h1>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FaqPage;
