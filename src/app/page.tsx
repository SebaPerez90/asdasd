import Landing from '@/components/Home/Landing/Landing';
import About from '@/components/Home/About/About';
import Services from '@/components/Home/Services/Services';
import Footer from '@/components/Footer/Footer';

const Home = () => {
  return (
    <>
      <main>
        <Landing />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  );
};

export default Home;
