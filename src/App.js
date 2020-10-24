import profileImg from './img/profile-icon.png';
import arrow from './img/arrow.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="menu-hamburguer"></div>
        <span className="profile-box">
          Meu Perfil
          <img className="avatar" src={profileImg} alt="avatar"/>
        </span>
      </header>

      <div id="result-wrapper">
        <div className="result-box">
          <span id="result">17</span>
        </div>
      </div>
      
      <div id="results-list">
        <div className="individual-result">
          <img src={profileImg} alt="avatar"/>
          <div className="roll-result"></div>
        </div>
        <div className="individual-result">
          <img src={profileImg} alt="avatar"/>
          <div className="roll-result"></div>
        </div>
        <div className="individual-result">
          <img className="result-avatar" src={profileImg} alt="avatar"/>
          <div className="roll-result"></div>
        </div>
      </div>
      
      <div id="roll-button-area">
        <button className="roll-button" type="button"></button>
      </div>

      <div id="toggle-dices-box-button">
        <img src={arrow} alt=""/>
      </div>

    </div>
  );
}

export default App;
