import './App.css';
import Nav from './Component/Nav';
import Header from './Component/Header';
import Modal from './Component/Modal';
import Banner from './Component/Banner';
import Categories from './Component/Categories';
import Product from './Component/Product';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Modal></Modal>
      <Banner></Banner>
      <Categories></Categories>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

export default App;
