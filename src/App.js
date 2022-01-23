import logo from './components/images/brianNameColorful.png';
import ContentContainer from './components/ContentContainer';
import SimpleBarReact from 'simplebar-react';
import './simplebar.min.css';
import './App.css';

function App() {
  
  return (
    <div className="backgroundImg">
      <img src={logo} className="myName" alt="logo" />
      <div className="contentContainerBorder">
          <div className="innerContent">

            <ContentContainer />

          </div>
      </div>
    </div>
  );
}

export default App;
