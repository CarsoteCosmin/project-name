import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'page1'])),
      // Will be passed to the page component as props
    },
  };
}

export const Page1 = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <div className="container">
      <main>
        <p>{t('page-1')}</p>

        <Link href="/page1" locale={router.locale === 'en' ? 'de' : 'en'}>
          <button className="button">{t('change-locale')}</button>
        </Link>

        <button className="button" type="button" title="Page2">
          <Link href={'/page2'}>
            <span>{t('page-2')}</span>
          </Link>
        </button>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .button {
          width: 120px;
          height: 50px;
          margin-right: 10px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Page1;
