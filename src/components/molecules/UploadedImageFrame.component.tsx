import CloseIcon from "@src/components/icon/Close.icon";
import { memo, useCallback } from "react";
import { ImageFrame } from "@src/components/molecules/MultipleImageUpload.component";
import styled from "styled-components";

const IconButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  z-index: 5;

  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;
const Container = styled.div`
  position: relative;
  height: fit-content;
`;
function UploadedImageFrameComponent({ resource, onRemove }) {
  const onClickRemove = useCallback(() => {
    onRemove(resource.path);
  }, [onRemove, resource]);
  return (
    <Container>
      <ImageFrame key={resource.path}>
        <img src={resource.url} alt={resource.path} />
      </ImageFrame>
      <IconButton onClick={onClickRemove}>
        <CloseIcon />
      </IconButton>
    </Container>
  );
}
export default memo(UploadedImageFrameComponent);
