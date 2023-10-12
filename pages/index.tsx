import About from '@/components/about';
import Home from '@/components/home';
import Work from '@/components/works';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Studio Emily Dias</title>
      </Head>
      <main>
        <Home />
        <Work />
        <About />
      </main>
    </>
  );
};
export default Index;
