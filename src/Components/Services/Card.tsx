import { FC } from 'react';

interface Props {
  icon: string;
  title: string;
  description: string;
  isInView: boolean;
  idx: number;
}

export const Card: FC<Props> = ({ icon, title, description, isInView, idx }) => {
  return (
    <div className="services__item" style={{
      transform: isInView ? 'none' : 'translateY(100%)',
      opacity: isInView ? 1 : 0,
      transition: `all ${(idx+1)/2}s ease-out 0.2s`,
    }}>
      <span className="services__icon">
        <i className={icon} />
      </span>
      <h3 className="services__title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};
