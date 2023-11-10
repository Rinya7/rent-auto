import { Route, Routes, Navigate } from 'react-router-dom';
//import SharedLayout from './components/SharedLayout/SharedLayout';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Favorites from './pages/Favorites/Favorites';
import { AppWrapper } from './App.styled';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//const test = import.meta.env.VITE_API_TEST;

function App() {
  //  console.log(test);
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
}
export default App;
