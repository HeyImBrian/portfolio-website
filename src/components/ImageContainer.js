import Button from "./Button.js"

import { useState } from "react"

const ImageContainer = ({ imgDescClass }) => {

  const [imgDesc, setImgDesc] = useState(imgDescClass.getCurrImgDesc());


  function prev() {
    setImgDesc(imgDescClass.getPrevCurrIndexValues());
  }

  function next() {
    setImgDesc(imgDescClass.getNextCurrIndexValues());
  }



  return (
  <div className="imageContainer">

    <div>
      <h2>{imgDescClass.overview[0]}</h2>
      <h4>{imgDescClass.overview[1]}</h4>
      <a href={imgDescClass.link} target="_blank"><h4>GitHub</h4></a>
    </div>
    
    <img src={imgDesc[0]}></img>
    <h4>{imgDesc[1]}</h4>

    <div className="buttonContainer">
      <Button buttonText="< Previous" pressed={prev} animationClass="leftBounce" />
      <Button buttonText="Next >" pressed={next} animationClass="rightBounce" />
    </div>

  </div>
  )
};

export default ImageContainer;
