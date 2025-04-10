import { Route, Routes } from 'react-router';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<div>mainpage</div>} />
        <Route path='/about' element={<div>about</div>} />
        <Route path='/contact-us' element={<div>ContactUs</div>} />
        <Route path='/blog' element={<div>blog</div>} />
        <Route path='/favorites' element={<div>favorites</div>} />
        <Route path='/cart' element={<div>cart</div>} />
        <Route path='/user-info' element={<div>user-info</div>} />
      </Route>
    </Routes>
  );
}

export default App;
