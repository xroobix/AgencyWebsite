import { FC, useEffect, useRef } from 'react';
import './header.css';

interface Props {
  theme: string;
  changeTheme: () => void;
}

export const Header: FC<Props> = ({ theme, changeTheme }) => {
  const nav__links = [
    {
      path: '#home',
      display: 'Home',
    },
    {
      path: '#projects',
      display: 'Projects',
    },
    {
      path: '#services',
      display: 'Services',
    },
    {
      path: '#about',
      display: 'About',
    },
    {
      path: '#blog',
      display: 'Blog',
    },
  ];

  const darkMode = (
    <>
      <i className="ri-sun-line" />
      <span>Light Mode</span>
    </>
  );

  const lightMode = (
    <>
      <i className="ri-moon-line" />
      <span>Dark Mode</span>
    </>
  );

  const headerRef = useRef<HTMLDivElement>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  const changeStickiness = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current &&
        headerRef.current.classList.add('header__shrink');
    } else {
      headerRef.current &&
        headerRef.current.classList.remove('header__shrink');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeStickiness);

    return () =>
      window.removeEventListener('scroll', changeStickiness);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const target = e.target as HTMLAnchorElement;

    const targetAttribute = target.getAttribute('href');

    if (targetAttribute !== null) {
      const element = document.querySelector(
        targetAttribute
      ) as HTMLElement;

      if (element !== null) {
        const location = element.offsetTop;

        window.scrollTo({
          left: 0,
          top: location - 80,
        });
      }
    }
  };

  const toggleMobileMenu = () =>
    menuRef.current?.classList.toggle('menu__active');

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>
              <a href="#">FutureMedia</a>
            </h2>
          </div>
          <div
            className="navigation"
            ref={menuRef}
            onClick={toggleMobileMenu}
          >
            <ul className="menu">
              {nav__links.map((i, idx) => (
                <li key={idx} className="menu__item">
                  <a
                    href={i.path}
                    className="menu__link"
                    onClick={handleLinkClick}
                  >
                    {i.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='right-menu'>
            <div className="light__mode">
              <button onClick={changeTheme}>
                {theme === 'light-theme' ? lightMode : darkMode}
              </button>
            </div>
            <span className="mobile__menu" onClick={toggleMobileMenu}>
              <i className="ri-menu-line" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
