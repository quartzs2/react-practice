import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Main from './pages/Main';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Favorites from './pages/Favorites';
import UserInfo from './pages/UserInfo';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='blog' element={<Blog />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='cart' element={<Cart />} />
        <Route path='user-info' element={<UserInfo />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
