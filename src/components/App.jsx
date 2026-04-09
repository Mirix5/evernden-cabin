import '../css/App.css';
import { Header } from './shared/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="background-img-wrapper">
        <img className='background-image' src="/images/kitchen.jpg" alt="Cabin kitchen" />
      </div>
    </div>
  );
}

export default App;
