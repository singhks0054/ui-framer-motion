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
          path='/docs'
          exact
          element={
            <>
              <BackGround />
              <Foreground />
            </>
          }
        />
        <Route path='/' exact element={<Email/>} />
      </Routes>
    </>
  );
}

export default App;
