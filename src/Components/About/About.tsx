import { ChoseUs } from './ChoseUs';
import './about.css';
import aboutImg from "../../images/about-us.jpg"

const chooseData = [
  {
    icon: 'ri-wifi-line',
    title: 'First working process',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consectetur repellendus delectus cum quibusdam error nostrum, neque ducimus! Tempore, omnis!',
  },
  {
    icon: 'ri-team-line',
    title: 'Dedicated team',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consectetur repellendus delectus cum quibusdam error nostrum, neque ducimus! Tempore, omnis!',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: '24/7 Hours support',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consectetur repellendus delectus cum quibusdam error nostrum, neque ducimus! Tempore, omnis!',
  },
];

export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Specialist in advising clients on</h2>
            <h2 className="highlight">financial challenges</h2>
            <p className="description about__content-desc">
              At our company, we understand that navigating financial
              challenges can be daunting. That's why we offer expert
              advice and guidance to help you make informed decisions
              and achieve your financial goals.
            </p>
            <div className="choose__us-item-wrapper">
              {chooseData.map((i, idx) => (
                <ChoseUs
                  icon={i.icon}
                  title={i.title}
                  description={i.description}
                  key={`choose__us-${idx}`}
                />
              ))}
            </div>
          </div>
          <div className="about__img">
            <img src={aboutImg} alt="about-us" />
          </div>
        </div>
      </div>
    </section>
  );
};
