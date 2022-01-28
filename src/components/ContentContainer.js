import ImageContainer from "./ImageContainer";

const ContentContainer = ({ imgDescClass, nextImgFunc, prevImgFunc }) => {
  return (
    <div className="innerContentContainer">
      <ImageContainer imgDescClass={imgDescClass} nextImgFunc={nextImgFunc} prevImgFunc={prevImgFunc} />
    </div>
  );
};

export default ContentContainer;
