import './header.css';

export const Header = () => {
  const nav__links = [
    {
      path: '#home',
      display: 'Home',
    },
    {
      path: '#about',
      display: 'About',
    },
    {
      path: '#service',
      display: 'Service',
    },
    {
      path: '#projects',
      display: 'Projects',
    },
    {
      path: '#blog',
      display: 'Blog',
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2><a href="#home">FutureMedia</a></h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((i, idx) => (
                <li key={idx} className="menu__item">
                  <a href={i.path} className="menu__link">
                    {i.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="light__mode">
            <button>
              <i className="ri-sun-line" />
              Light Mode
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
