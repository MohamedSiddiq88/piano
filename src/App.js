import './App.css';
// import './Test.css'
import Piano from './Components/Piano';
import Test from './Test/Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Piano/>
        {/* <Test/> */}
        <p className='message'>please rotate your device</p>
      </header>
    </div>
  );
}

export default App;
