import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

const About = () => {
  const linkClickHandler = () => {
    Router.push('/');
  };

  return (
    <MainLayout title="About">
      <h1>About page</h1>

      <button onClick={linkClickHandler}>Go back to home page</button>
      <button onClick={() => Router.push('/posts')}>Go to Posts</button>
    </MainLayout>
  );
};

export default About;
