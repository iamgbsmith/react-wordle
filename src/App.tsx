import './App.css';
import { RecoilRoot } from 'recoil';
import { Toaster } from 'react-hot-toast';
import Game from './components/game';

function App() {
  return (
    <RecoilRoot>
      <>
        <Toaster position="top-center" toastOptions={{duration: 2000}}/>
        <Game/>
      </>
    </RecoilRoot>
  );
}

export default App;
