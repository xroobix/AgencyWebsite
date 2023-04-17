import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './newsletter.css';
export const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="newsletter" ref={ref}>
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h2
              style={{
                transform: isInView ? 'none' : 'translateX(-100%)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.5s ease-out 0.2s',
              }}
            >
              Be in the Know -
              <span className="highlight">
                {' '}
                Subscribe to Our Newsletter!
              </span>
            </h2>
            <form
              className="newsletter__form"
              style={{
                transform: isInView ? 'none' : 'translateX(100%)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.5s ease-out 0.2s',
              }}
            >
              <input
                type="email"
                className="email-input"
                placeholder="Email..."
              />
              <input
                type="submit"
                className="primary__btn"
                value="Subscribe!"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
