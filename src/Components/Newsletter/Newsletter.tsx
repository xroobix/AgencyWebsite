import './newsletter.css';
export const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h2>
              Be in the Know -
              <span className="highlight">
                {' '}
                Subscribe to Our Newsletter!
              </span>
            </h2>
            <form className="newsletter__form">
              <input
                type="email"
                className="email-input"
                placeholder="Email..."
              />
              <input
                type="submit"
                className="secondary__btn"
                value="Subscribe!"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
