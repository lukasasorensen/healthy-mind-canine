import { useState } from 'react';

function EmbedFrame({ src, title, className = '', loadingText }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="embed-page">
      {!isLoaded ? (
        <div className="embed-loader">
          <div className="spinner" aria-hidden="true" />
          <p>{loadingText}</p>
        </div>
      ) : null}

      <iframe
        className={`embed-frame ${className}`.trim()}
        src={src}
        title={title}
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded ? 'block' : 'none' }}
      />
    </div>
  );
}

export default EmbedFrame;
