import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar'
import HomePage from './Home/HomePage';
import Service from './Service/Service'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Footer from './Footer/Footer';
import BookList from './BuyBooksComponents/BooksShowcasePageAfterLogin/booksListAfterLogin';
import BookDescription from './BuyBooksComponents/BookDescription';
import CartItems from './Cart/cartItems';
import Login from './BuyBooksComponents/Login/Login';
function App() {
  return (
    <div className="App">
      
          <Navbar />
        {/* <Login />*/}
          {/*<HomePage />*/}
          {/*<Service />*/}
        {/*  <Router >*/}
              <Routes>
                  <Route path="/" element={<HomePage />}> </Route>
              <Route path="/service" element={<Service />} >  </Route>
              <Route path="/buyBooks" element={<BookList />} >  </Route>
              <Route path="/books/:id" element={<BookDescription />} >  </Route>
              <Route path="/cart" element={<CartItems></CartItems>}></Route>
              </Routes>
          {/*  </Router>*/}
          <Footer />
    </div>
  );s
}

export default App;
