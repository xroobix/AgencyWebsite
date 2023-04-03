import './counter.css';

const counterData = [
  {
    number: "10k+",
    text: 'Happy clients',
  },
  {
    number: "350+",
    text: 'Running projects',
  },
  {
    number: "1000+",
    text: 'Projects Completed',
  },
];

export const Counter = () => {
  return (
    <section className="counter" id='projects'>
      <div className="container">
        <div className="counter__wrapper">
          {counterData.map((i, idx) => (
            <div key={idx} className="counter__item">
              <h3 className="counter__number">{i.number}</h3>
              <h4 className="counter__title">{i.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
