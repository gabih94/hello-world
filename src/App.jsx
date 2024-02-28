import './App.css';
import Challenge from './components/Challenge';
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import MyEvent from './components/MyEvent';

function App() {
  return (
    <div className="App-body">
      <div className="App">
        <h1> Bem Vindo!</h1>
        <MyComponent/>
        <FirstComponent/>
        <MyEvent/>
      </div>
      <div className="App">
        <Challenge/>
      </div>
    </div>
  );
}

export default App;
