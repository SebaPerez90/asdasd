import Landing from '@/components/Home/Landing/Landing';
import About from '@/components/Home/About/About';
import OfferService from '@/components/Home/Services/OfferService/OfferService';
import GetService from '@/components/Home/Services/GetService/GetService';
import OurServices from '@/components/Home/Services/OurServices/OurServices';

const App = () => {
  return (
    <main id='main-section'>
      <Landing />
      <About />
      <GetService />
      <OurServices />
      <OfferService />
    </main>
  );
};

export default App;
