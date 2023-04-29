import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage.tsx';
import Music from './Music.tsx';

function App() {
  return (
  <BrowserRouter>
      <Routes>
      <Route path="/"  element={<HomePage />}/>
      <Route path="/music" element={<Music />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;