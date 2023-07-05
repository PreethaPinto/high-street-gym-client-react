import { Link, json, useLoaderData } from 'react-router-dom';
import BlogsList from '../components/BlogsList';

const BlogPage = () => {
  const blogs = useLoaderData();

  return <BlogsList blogs={blogs} />;
};

export default BlogPage;

export const blogLoader = async () => {
  const response = await fetch('http://localhost:8080/blogs');

  if (!response.ok) {
    throw json({ message: 'Could not fetch blogs' }, { status: 500 });
  } else {
    const responseData = await response.json();
    //console.log(responseData);
    return responseData;
  }
};
