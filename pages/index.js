import Link from 'next/link';
import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';

const Index = () => {
  return (
    <MainLayout title={'Home'}>
      <h1>Hello, Next.js!</h1>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>dsf sdf sdf sd sdfadsafaf asdf ads fasdafasdfsa sdgasd</p>
    </MainLayout>
  );
};

export default Index;
