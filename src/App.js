import { Route, Routes } from 'react-router-dom';

import './index.css';
import './styles/reset.css';
import './styles/root.css';

import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className='main'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
