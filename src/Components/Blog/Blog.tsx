import { useInView } from 'framer-motion';
import { useRef } from 'react';
import articleThumbnail from '../../images/article.png';
import caseStudyThumbnail from '../../images/case-study.png';
import videoThumbnail from '../../images/video.png';
import { Post } from './Post';
import './blog.css';

const blogData = [
  {
    title: 'Video',
    category: 'Marketing',
    description: 'In this video you gonna learn how ...',
    thumbnail: videoThumbnail,
    link: '#',
  },
  {
    title: 'Case Study',
    category: 'SEO',
    description:
      "You've just written an article. And you think it's pretty good. But is it fit to compete with the millions of other articles in Google's index on the same topic? In this post ...",
    thumbnail: caseStudyThumbnail,
    link: '#',
  },
  {
    title: 'Article',
    category: 'Design',
    description: 'This article will give you a basic ...',
    thumbnail: articleThumbnail,
    link: '#',
  },
];

export const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="blog" className="blog" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="blog__top-content">
          <h6 className="subtitle">Our Blog</h6>
          <h2>
            Let's have a look at our
            <span className="highlight"> recent posts</span>
          </h2>
        </div>
        <div className="blog__wrapper">
          {blogData.map((i, idx) => (
            <Post
              key={`BlogPost-${idx}`}
              title={i.title}
              category={i.category}
              description={i.description}
              thumbnail={i.thumbnail}
              link={i.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
