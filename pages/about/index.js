import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

const About = ({ title }) => {
  const linkClickHandler = () => {
    Router.push('/');
  };

  return (
    <MainLayout title="About">
      <h1>{title}</h1>

      <button onClick={linkClickHandler}>Go back to home page</button>
      <button onClick={() => Router.push('/posts')}>Go to Posts</button>
    </MainLayout>
  );
};

export default About;

About.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/about');
  const data = await response.json();
  return {
    title: data.title,
  };
};
