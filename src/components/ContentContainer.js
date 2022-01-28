import ImageContainer from "./ImageContainer";

const ContentContainer = ({ imgDescClass }) => {
  return (
    <div className="innerContentContainer">
      <ImageContainer imgDescClass={imgDescClass} />
    </div>
  );
};

export default ContentContainer;
