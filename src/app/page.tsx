import Landing from '@/components/Home/Landing/Landing';
import About from '@/components/Home/About/About';
import Footer from '@/components/Footer/Footer';
import OfferService from '@/components/Home/Services/OfferService/OfferService';

const Home = () => {
  return (
    <>
      <main>
        <Landing />
        <About />
        <OfferService />
      </main>
      <Footer />
    </>
  );
};

export default Home;
