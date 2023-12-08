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
        <Route path='/email' exact Component={Email} />
      </Routes>
    </>
  );
}

export default App;
