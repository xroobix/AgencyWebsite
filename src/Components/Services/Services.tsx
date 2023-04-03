import { Card } from './Card';
import './services.css';

const servicesData = [
    {
        icon: "ri-apps-line",
        title: "App Developmnet",
        description: "It is the process of creating software applications for mobile devices that can range from simple applications designed for a specific purpose to complex apps with multiple features and integrations.",
    },
    {
        icon: "ri-code-s-slash-line",
        title: "Web Design",
        description: "A well-designed website can help businesses and organizations establish a strong online presence, improve user engagement, and increase conversions.",
    },
    {
        icon: "ri-landscape-line",
        title: "Graphics Design",
        description: "The goal of graphics design is to create visual content that is both aesthetically pleasing and informative, while also aligning with a brand's identity and marketing objectives.",
    },
    {
        icon: "ri-rocket-line",
        title: "Digital Marketing",
        description: "Digital marketing is promoting products or services using digital channels to reach and engage with target audiences, increase brand awareness, and drive conversions.",
    },
]

export const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight">our best services</h2>
        </div>
        <div className="services__item-wrapper">
            {servicesData.map((i, idx) => (
                <Card key={`services__item-${idx}`} title={i.title} description={i.description} icon={i.icon}/>
            ))}
        </div>
      </div>
    </section>
  );
};
