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
  <div>
    <img src={imgDesc[0]}></img>
    <h4>{imgDesc[1]}</h4>
    <Button buttonText="< Previous" pressed={prev} />
    <Button buttonText="Next >" pressed={next} />
  </div>
  )
};

export default ImageContainer;
