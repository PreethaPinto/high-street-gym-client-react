import { useLoaderData, json } from 'react-router-dom';

import BlogItem from '../components/BlogItem';

const BlogDetailPage = () => {
  const data = useLoaderData();

  return <BlogItem data={data} />;
};

export default BlogDetailPage;

export const blogDetailsLoader = async ({ request, params }) => {
  const id = params.blogId;
  console.log(id);
  const response = await fetch('http://localhost:8080/blogs/' + id);

  if (!response.ok) {
    throw json({ message: 'Could not fetch blog' }, { status: 500 });
  } else {
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }
};
