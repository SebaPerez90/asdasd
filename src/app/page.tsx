import Landing from '@/components/Home/Landing/Landing';
import About from '@/components/Home/About/About';
import Footer from '@/components/Footer/Footer';
import OfferService from '@/components/Home/Services/OfferService/OfferService';
import GetService from '@/components/Home/Services/GetService/GetService';
import OurServices from '@/components/Home/Services/OurServices/OurServices';

const Home = () => {
  return (
    <>
      <main>
        <Landing />
        <About />
        <GetService />
        <OurServices />
        <OfferService />
      </main>
      <Footer />
    </>
  );
};

export default Home;
