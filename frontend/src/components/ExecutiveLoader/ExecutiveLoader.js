import React, { useEffect, useState } from 'react';
import './ExecutiveLoader.css';

const ExecutiveLoader = ({ onComplete }) => {
  const [stage, setStage] = useState('active'); // active | finishing | done

  useEffect(() => {
    // Step 5: Begin exit transition at 2.6s and complete at 3.0s
    const timerFinish = setTimeout(() => {
      setStage('finishing');
    }, 2600);

    const timerDone = setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(timerFinish);
      clearTimeout(timerDone);
    };
  }, [onComplete]);

  if (stage === 'done') return null;

  return (
    <div className={`executive-loader-overlay ${stage === 'finishing' ? 'fade-out' : ''}`}>
      {/* Background Spotlight & Vignette */}
      <div className="loader-spotlight" />
      <div className="loader-vignette" />

      <div className="loader-content-wrapper">
        {/* Step 2 & 3: Logo Container + Golden Ring Draw */}
        <div className="loader-logo-container">
          <svg className="loader-golden-ring" viewBox="0 0 160 160">
            <circle
              className="ring-track"
              cx="80"
              cy="80"
              r="74"
            />
            <circle
              className="ring-path"
              cx="80"
              cy="80"
              r="74"
            />
          </svg>

          {/* Official FATIA Logo Emblem */}
          <div className="loader-logo-emblem">
            <img
              src="/favicon.png"
              alt="FATIA Emblem"
              className="loader-logo-img"
              onError={(e) => {
                // Fallback to text emblem if image unavailable
                e.target.style.display = 'none';
                e.target.parentNode.classList.add('fallback-emblem');
              }}
            />
          </div>
        </div>

        {/* Brand Text */}
        <div className="loader-brand-box">
          <h1 className="loader-brand-title">FATIA</h1>
          <p className="loader-brand-subtitle">
            FEDERATION OF ALL TRADE & INDUSTRY ASSOCIATIONS
          </p>
        </div>

        {/* Step 4: Loading Indicator Bar */}
        <div className="loader-bar-container">
          <div className="loader-bar-track">
            <div className="loader-bar-fill" />
          </div>
          <span className="loader-status-text">
            LOADING OFFICIAL FATIA PORTAL...
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveLoader;
