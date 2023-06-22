import { useParams } from 'react-router-dom';
import BlogItem from '../components/BlogItem';

const BlogDetailPage = (props) => {
  const params = useParams();
  return (
    <div>
      <BlogItem />
    </div>
  );
};

export default BlogDetailPage;
