import logo from './components/images/brianNameColorful.png';
import ContentContainer from './components/ContentContainer';
import SimpleBarReact from 'simplebar-react';
import './simplebar.min.css';
import './App.css';

function App() {

  function importAllPictures(pictures) {
    return pictures.keys().map(pictures);
  }
  
  const imagesAppointmentProgram = importAllPictures(require.context("./components/images/projects/appointment-customer-program", false, /\.(png|jp?g)$/));
  const imagesInventoryProgram = importAllPictures(require.context("./components/images/projects/inventory-program", false, /\.(png|jp?g)$/));
  const mooloolabaSite = importAllPictures(require.context("./components/images/projects/mooloolaba-site", false, /\.(png|jp?g)$/));

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