import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import darkThemeHeroImg from '../../images/hero-img.png';
import lightThemeHeroImg from '../../images/light-hero-img.jpg';
import './hero.css';

interface Props {
  theme: string;
}

export const Hero: FC<Props> = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="hero__section" id="home" ref={ref}>
      <div className="container">
        <div className="hero__wrapper">
          <div
            className="hero__content"
            style={{
              transform: isInView ? 'none' : 'translateX(-100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            <div>
              <h2>We're Creating Perfect</h2>
              <h2>Digital Products To</h2>
              <h2 className="highlight">Promote Your Brand</h2>
            </div>
            <p className="description">
              FutureMedia is a digital marketing agency that helps
              businesses grow online through services like SEO, social
              media marketing, and PPC advertising. We're dedicated to
              innovation and delivering results-driven strategies for
              our clients.
            </p>
            <div className="hero__btns">
              <button className="primary__btn">
                Get Started Now
              </button>
              <button className="secondary__btn">
                Discover More
              </button>
            </div>
          </div>
          <div className="hero__img">
            <img
              src={
                theme === '' ? darkThemeHeroImg : lightThemeHeroImg
              }
              alt="hero-img"
              style={{
                transform: isInView ? 'none' : 'translateX(100%)',
                opacity: isInView ? 1 : 0,
                transition: 'all 1s ease-out 0.5s',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
