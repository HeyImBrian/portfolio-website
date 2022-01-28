import Button from "./Button.js"

import { useState } from "react"

const ImageContainer = ({ imgDescClass, prevImgFunc, nextImgFunc }) => {
  return (
  <div>
    <img src={imgDescClass.getCurrImgDesc()[0]}></img>
    <Button buttonText="< Previous" />
    <Button buttonText="Next >" />
  </div>
  )
};

export default ImageContainer;
