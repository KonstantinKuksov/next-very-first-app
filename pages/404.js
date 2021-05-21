import Link from 'next/link';
import { MainLayout } from '../components/MainLayout';
import classes from '../styles/error.module.scss';

const ErrorPage = () => {
  return (
    <>
      <MainLayout title="404">
        <h1 className={classes.error}>Error 404</h1>
        <p>
          Please,{' '}
          <Link href={'/'}>
            <a>go back</a>
          </Link>{' '}
          to safety
        </p>
      </MainLayout>
    </>
  );
};

export default ErrorPage;