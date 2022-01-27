import myName from './components/images/brianNameColorful.png';
import ContentContainer from './components/ContentContainer.js';
import projectContent from './projectContent.js'

import imgDesc from './imgsAndDesc.js'

import './simplebar.min.css';
import './App.css';

function App() {

  const appointmentProgram = new projectContent(imgDesc.imagesAppointmentProgram, imgDesc.descsAppointmentProgram);
  const inventoryProgram = new projectContent(imgDesc.imagesInventoryProgram, imgDesc.descsInventoryProgram);
  const mooloolabaWebsite = new projectContent(imgDesc.imagesmooloolabaSite, imgDesc.descsMooloolabaSite);


  function nextImg(project) {
    project.getNextCurrIndexValues();
  }

  function prevImg(project) {
    project.getPrevCurrIndexValues();
  }




  return (
    <div className="backgroundImg">
      <img src={myName} className="myName" alt="Brian St. Germain" />
      <div className="contentContainerBorder">
          <div className="innerContent">

            <ContentContainer software={appointmentProgram} nextImgFunc={nextImg} prevImgFunc={prevImg}/>
            <ContentContainer software={inventoryProgram} nextImgFunc={nextImg} prevImgFunc={prevImg} />
            <ContentContainer software={mooloolabaWebsite} nextImgFunc={nextImg} prevImgFunc={prevImg} />

          </div>
      </div>
    </div>
  );
}




export default App;