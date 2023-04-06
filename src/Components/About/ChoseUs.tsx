import { FC } from 'react';

interface Props {
  icon: string;
  title: string;
  description: string;
}

export const ChoseUs: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="choose__us-item">
      <span className="choose__us-icon">
        <i className={icon} />
      </span>
      <div>
        <h4 className="choose__us-title">{title}</h4>
        <p className="description choose__us-description">{description}</p>
      </div>
    </div>
  );
};
