import Slider from 'react-slick';
import customer1 from '../../images/ava-1.jpg';
import customer2 from '../../images/ava-2.jpg';
import customer3 from '../../images/ava-3.jpg';
import { CustomerSlide } from './CustomerSlide';
import './testimonial.css';

const customerData = [
  {
    name: 'John Lee',
    description: `"I cannot recommend FutureMedia highly enough! As the CEO of a large corporation, I was initially hesitant to work with an external agency. However, the team at FutureMedia quickly put my fears to rest. They were professional, efficient, and most importantly, delivered results. Their expertise in digital marketing helped us to increase our online presence and generate more leads than ever before. I will definitely be using FutureMedia for all my marketing needs in the future!"`,
    image: customer1,
    position: 'CEO, DreamMakers',
  },
  {
    name: 'Sarah Thompson',
    description: `"I am so glad that we chose FutureMedia as our marketing agency! From the very beginning, they took the time to understand our business goals and develop a customized strategy that would help us achieve them. Their team is always available to answer questions and provide updates, and they have been instrumental in helping us to build brand awareness and drive more traffic to our website. Thanks to their hard work and dedication, we have been able to grow our business and reach new customers. I would highly recommend FutureMedia to any CEO looking for a reliable and effective marketing partner."`,
    image: customer2,
    position: 'CEO, WonderSon',
  },
  {
    name: 'Alexander Ramirez',
    description: `"FutureMedia is simply the best marketing agency out there! As a CEO, I have worked with several different agencies over the years, but none have matched the level of expertise and commitment that FutureMedia brings to the table. Their team is dedicated, creative, and always willing to go the extra mile to ensure that our campaigns are a success. Thanks to their efforts, we have seen a significant increase in traffic and conversions on our website. I would highly recommend FutureMedia to any business looking to take their marketing to the next level."`,
    image: customer3,
    position: 'CEO, RamiTech',
  },
];

export const Testimonial = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
  };

  return (
    <section className='testimonial'>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than
            <span className="highlight"> 500 customers!</span>{' '}
          </h2>
        </div>
        <div className="slider__wrapper">
          <Slider {...settings}>
            {customerData.map((i, idx) => (
              <CustomerSlide
                key={`slide-${idx}`}
                name={i.name}
                description={i.description}
                image={i.image}
                position={i.position}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
