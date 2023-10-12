import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
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
        <Contact />
        <Footer />
      </main>
    </>
  );
};
export default Index;
