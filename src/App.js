import { Route, Routes } from 'react-router-dom';
import './App.css';
import BackGround from './components/background';
import Foreground from './components/foreground';
import Email from './page/email';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          exact
          element={
            <>
              <BackGround />
              <Foreground />
            </>
          }
        />
        <Route path='/email' exact element={<Email />} />
        {/* add a not found route */}
        <Route path='*' element={<h1 className='text-center font-mono text-red-600 text-5xl mt-4 '>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
