import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    // <>
    // <Header/>
    // <main>
    //   <Container>
    //   </Container> 
    // </main>  
    // <Footer/>
    // </>






    <>
    <ProductProvider>
    <Router>
      <Header />
      <main>
        <Container>
        <Routes>
        {/* <Route exact path="/" element={
          <>
            <ProductList/>
          </>
        }>
        </Route>   */}
            <Route path="/" element={<ProductList/>}/>
          </Routes>

          
        </Container>
        </main>
        <Footer/>
    </Router>
    </ProductProvider>
    </>
  );
}

export default App;
