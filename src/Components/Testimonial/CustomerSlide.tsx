import { FC } from 'react';

interface Props {
  name: string;
  description: string;
  image: string;
  position: string;
}

export const CustomerSlide: FC<Props> = ({
  name,
  description,
  image,
  position,
}) => {
  return (
    <div className="slider__item">
      <p className="description">{description}</p>
      <div className="customer__details">
        <div className="customer__img">
          <img src={image} alt="customer-image" />
        </div>
        <div>
          <h5 className="customer__name">{name}</h5>
          <p className="customer__position">{position}</p>
        </div>
      </div>
    </div>
  );
};
