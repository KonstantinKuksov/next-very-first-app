import Head from 'next/head';
import Link from 'next/link';

export const MainLayout = ({ children, title = 'Page' }) => {
  return (
    <>
      <Head>
        <title>{title} | My First Next App</title>
        <meta name="keywords" content="ssr, react. next, next.js" />
        <link
          rel="shortcut icon"
          href="../public/favicon.ico"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="My very first experience with Next.js"
        />
      </Head>
      <nav>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav a {
          color: white;
          text-decoration: none;
          font-size: 20px;
        }

        nav {
          height: 60px;
          background-color: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
};
