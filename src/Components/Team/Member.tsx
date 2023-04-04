import { FC } from 'react';

interface Props {
  image: string;
  name: string;
  position: string;
}

export const Member: FC<Props> = ({ image, name, position }) => {
  return (
    <div className="team__item">
      <div className="team__img">
        <img src={image} alt="team-member" />
      </div>
      <div className="team__details">
        <h4>{name}</h4>
        <p className="description">{position}</p>
        <div className="team__member-social">
          <span>
            <i className="ri-linkedin-box-fill" />
          </span>
          <span>
            <i className="ri-twitter-fill" />
          </span>
        </div>
      </div>
    </div>
  );
};
