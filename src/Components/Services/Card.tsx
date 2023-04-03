import { FC } from 'react';

interface Props {
  icon: string;
  title: string;
  description: string;
}

export const Card: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="services__item">
      <span className="services__icon">
        <i className={icon} />
      </span>
      <h3 className="services__title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};
