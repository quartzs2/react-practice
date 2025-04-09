import { Route, Routes } from 'react-router';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<div>mainpage</div>} />
      </Route>
    </Routes>
  );
}

export default App;
