import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import Cart from '@/pages/Cart';
import ContactUs from '@/pages/ContactUs';
import Favorites from '@/pages/Favorites';
import Main from '@/pages/Main';
import NotFound from '@/pages/NotFound';
import UserInfo from '@/pages/UserInfo';
import Products from './pages/Products';

function App() {
  const ROUTES = [
    { path: '/', element: <Main /> },
    { path: 'about', element: <About /> },
    { path: 'contact-us', element: <ContactUs /> },
    { path: 'blog', element: <Blog /> },
    { path: 'favorites', element: <Favorites /> },
    { path: 'cart', element: <Cart /> },
    { path: 'user-info', element: <UserInfo /> },
    { path: 'products/:catalog', element: <Products /> },
    { path: '*', element: <NotFound /> },
  ];

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
