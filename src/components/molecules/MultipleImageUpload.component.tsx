import UploadComponent from "@src/components/molecules/Upload.component";
import { useCallback, useMemo, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Resource } from "@src/models/dto/api-response";
import styled from "styled-components";
import theme, { FontSize } from "@src/styles/theme";
import UploadedImageFrameComponent from "@src/components/molecules/UploadedImageFrame.component";
import ColoredCameraIcon from "@src/components/icon/ColoredCamera.icon";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: auto;
`;
export const ImageFrame = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.color.point};
  border-radius: 9px;
  position: relative;
  cursor: pointer;
  img {
    min-width: 80px;
  }
`;
export const Message = styled.p`
  margin-bottom: 0;
  font-size: ${FontSize.PrimaryDescription};
`;
function MultipleImageUploadComponent({
  messageOnEmpty,
  uploaded,
  setUploaded,
}) {
  const [loading, setLoading] = useState(false);

  const onUploaded = useCallback(
    (resources) => {
      setUploaded([...uploaded, ...resources]);
    },
    [uploaded],
  );

  const onRemove = useCallback(
    (path) => {
      setUploaded(uploaded.filter((x) => x.path !== path));
    },
    [uploaded],
  );

  return (
    <Container>
      {uploaded.map((x) => (
        <UploadedImageFrameComponent
          key={x.path}
          resource={x}
          onRemove={onRemove}
        />
      ))}
      {loading && (
        <ImageFrame>
          <LoadingOutlined />
        </ImageFrame>
      )}
      <UploadComponent
        icon={
          <ImageFrame>
            <ColoredCameraIcon />
          </ImageFrame>
        }
        setLoading={setLoading}
        onUploaded={onUploaded}
        multiple
      />
      {uploaded.length === 0 && !loading && <Message>{messageOnEmpty}</Message>}
    </Container>
  );
}

export default MultipleImageUploadComponent;
