// import profileImg from './img/profile-icon.svg';
import profileImg from './img/priest.svg';
import arrow from './img/arrow.png';
import './App.css';

function App() {

  const dices =  [{
    "name": "Cleiton",
    "dices": [
        {
          "diceType":"D6",
          "value": 4
      },
        {
          "diceType":"D6",
          "value": 6
      },
    ],
    "modifier": 8,
    "result": 10
  }]

  return (
    <div className="App">
      <header className="App-header">
        <div className="menu-hamburguer"></div>
        <span className="profile-box">
          <span>Meu Perfil</span>
          <div className="avatar-wrapper">
            <img className="avatar" src={profileImg} alt="avatar"/>
          </div>
        </span>
      </header>

      <div id="result-wrapper">
        <div className="result-box">
          <span id="result">17</span>
        </div>
      </div>
      
      <div id="results-list">
        <div className="individual-result">
          <div className="svg-wrapper">
            <img src={profileImg} alt="avatar"/>
          </div>
          <div className="roll-result"></div>
        </div>
        <div className="individual-result">
          <div className="svg-wrapper">
            <img src={profileImg} alt="avatar"/>
          </div>
          <div className="roll-result"></div>
        </div>
        <div className="individual-result">
          <div className="result-avatar">
            <img src={profileImg} alt="avatar"/>
          </div>
          <div className="roll-result"></div>
        </div>
      </div>
      
      <div id="roll-button-area">
        <button className="roll-button" type="button"></button>
      </div>

      <div id="toggle-dices-box-button">
        <img src={arrow} alt=""/>
      </div>

      <div id="dices-box"></div>

    </div>
  );
}

export default App;
