function DiscoveryCallButton({ className = '' }) {
  return (
    <a
      className={`cta-button ${className}`.trim()}
      href="https://calendly.com/healthymindcanine/discovery-call"
      target="_blank"
      rel="noreferrer"
    >
      Book a FREE Discovery Call! <span aria-hidden="true">☎</span>
    </a>
  );
}

export default DiscoveryCallButton;
