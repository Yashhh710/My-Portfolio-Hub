import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import AmbientEffects from './components/AmbientEffects/AmbientEffects';
import PortfolioGrid from './components/PortfolioGrid/PortfolioGrid';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Loader />
      <Header />
      <AmbientEffects />
      <PortfolioGrid />
    </>
  );
}
