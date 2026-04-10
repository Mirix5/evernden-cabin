import '../css/App.css';
import { Header } from './shared/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="background-video-wrapper">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/media/slideshow.webm" type="video/webm" />
        </video>
        <div className="background-overlay" />
      </div>
    </div>
  );
}

export default App;
