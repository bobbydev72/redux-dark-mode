import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/layout/Header';
import { dummyCards } from '../constants/cards';
import { Card } from '../components/modules/Card';
import { useSelector } from 'react-redux';
import { themeSelector } from '../redux/theme/selectors';

const Home: NextPage = () => {
  const theme = useSelector(themeSelector);

  return (
    <>
      <Head>
        <title>Redux Dark Mode</title>
        <meta name="description" content="Next.js + Redux + Tailwind" />
      </Head>
      <div className={theme}>
        <Header />
        <div className="dark:bg-slate-900">
          <div className="container mx-auto py-12">
            <div className="grid grid-cols-4 gap-4">
              {dummyCards.map((item, key) => (
                <Card
                  key={key}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
