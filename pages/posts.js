import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MainLayout } from '../components/MainLayout';

const Posts = ({ posts }) => {
  /* const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:4200/posts');
      const json = await response.json();
      setPosts(json);
    }

    load();
  }, []);
 */

  return (
    <MainLayout title="Posts">
      <h1>Posts page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={'/post/[id]'} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default Posts;

Posts.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/posts');
  const posts = await response.json();

  return {
    posts,
  };
};
