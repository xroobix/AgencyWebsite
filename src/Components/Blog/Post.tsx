import { FC } from 'react';

interface Props {
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  link: string;
}

export const Post: FC<Props> = ({
  title,
  category,
  description,
  thumbnail,
  link,
}) => {
  return (
    <div className="blog__item">
      <h3>{title}</h3>
      <h4>{category}</h4>
      <div className="blog__img">
        <img src={thumbnail} alt="post-thumbnail" />
      </div>
      <p className="description post__description">{description}</p>
      <div className="learn__more">
        <a href={link}>
          Learn more... <i className="ri-arrow-right-line" />
        </a>
      </div>
    </div>
  );
};
