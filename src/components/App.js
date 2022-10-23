import '../css/App.css';
import { Header } from './shared/Header';

function App() {
  return (
    <div className="App">
        {/* <div className='background-overlay'></div> */}
        <Header middle={true} />
        <div className="background-img-wrapper">
          <img className='background-image' src="/images/kitchen.jpg" type="image" />
        </div>
      </div>
    );
}

export default App;
