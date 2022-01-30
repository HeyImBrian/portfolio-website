import ImageContainer from "./ImageContainer";

const ContentContainer = ({ imgDescClass }) => {
  return (
    <div className="innerContentContainer">
      <ImageContainer className="imageContainer" imgDescClass={imgDescClass} />
    </div>
  );
};

export default ContentContainer;
