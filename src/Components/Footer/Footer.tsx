import './footer.css';
export const Footer = () => {
    const year = new Date().getFullYear();
    const quickLinks = [
        {
            name: 'Solutions',
            content: [
                {
                    path: '#',
                    display: 'Marketing',
                },
                {
                    path: '#',
                    display: 'Analytics',
                },
                {
                    path: '#',
                    display: 'Ecommerce',
                },
            ],
        },
        {
            name: 'Support',
            content: [
                {
                    path: '#',
                    display: 'Pricing',
                },
                {
                    path: '#',
                    display: 'Documentation',
                },
                {
                    path: '#',
                    display: 'Guides',
                },
            ],
        },
        {
            name: 'Company',
            content: [
                {
                    path: '#',
                    display: 'About',
                },
                {
                    path: '#',
                    display: 'Jobs',
                },
                {
                    path: '#',
                    display: 'Blog',
                },
            ],
        },
    ];
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <h2>FutureMedia</h2>
                        <p className="description footer__desc">
                            Grow with us
                        </p>
                        <p className="small__text description">
                            "Grow with Us" is more than just an
                            invitation to take advantage of our range
                            of services - it's a promise of
                            partnership and growth. At our company, we
                            are dedicated to providing personalized
                            solutions that help businesses and
                            individuals achieve their goals.
                        </p>
                    </div>
                    <div className="footer__quick-links-wrapper">
                        {quickLinks.map((i, idx) => (
                            <div
                                key={idx}
                                className="footer__quick-links"
                            >
                                <h3 className="quick__links-title">
                                    {i.name}
                                </h3>
                                <ul className="quick__links">
                                    {i.content.map((link, idx) => (
                                        <li
                                            key={`link-${idx}`}
                                            className="quick__link-item"
                                        >
                                            <a
                                                key={idx}
                                                href={link.path}
                                            >
                                                {link.display}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="copyright">
                    Copyright© {year}, developed by{' '}
                    <a href="hhttps://github.com/xroobix">RooB</a>.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};
