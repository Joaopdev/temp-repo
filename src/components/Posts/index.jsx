import P from 'prop-types';
import './styles.css';
import { PostCard } from '../PostCard/index';

export const Posts = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          post={post}
          cover={post.cover}
        />
      ))}
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number,
    }),
  ),
};