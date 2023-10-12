import About from '@/components/about';
import Contact from '@/components/contact';
import Feedback from '@/components/feedback';
import Footer from '@/components/footer';
import Home from '@/components/home';
import Mimos from '@/components/mimos';
import Navbar from '@/components/navbar';
import Brow from '@/components/services/brow';
import Services from '@/components/services/design';
import Extesion from '@/components/services/extesion';
import Lash from '@/components/services/lash';
import Work from '@/components/works';
import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>Studio Emily Dias</title>
      </Head>
      <main>
        <Navbar />
        <Home />
        <Work />
        <About />
        <Services />
        <Lash />
        <Brow />
        <Extesion />
        <Mimos />
        <Feedback />
        <Contact />
        <Footer />
      </main>
    </>
  );
};
export default Index;
