import { useCallback, useMemo, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";
import CloseIcon from "@src/components/icon/Close.icon";
import { TextButton } from "@src/components/atoms/TextButton";
import { FontSize } from "@src/styles/theme";

const Container = styled.div`
  .image-gallery {
    width: 100vw;
  }
  img {
    height: 250px;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    position: absolute;
    width: fit-content;
    top: 5px;
    right: 5px;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

function ImageGalleryComponent({ images = [] as string[] }) {
  const [popupImgSrc, setPopupImgSrc] = useState(null);
  const imageList = useMemo(
    () =>
      images.map((x) => ({
        original: x,
        originalHeight: "250px",
        originalWidth: "auto",
      })),
    [images],
  );
  const onClick = useCallback((e) => {
    setPopupImgSrc(e.target.src);
  }, []);
  const onClickPopup = useCallback((e) => {
    setPopupImgSrc(null);
  }, []);
  return (
    <Container>
      <ImageGallery
        items={imageList}
        onClick={onClick}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets
      />
      {popupImgSrc && (
        <Popup onClick={onClickPopup}>
          <img src={popupImgSrc} alt="popup" />
        </Popup>
      )}
    </Container>
  );
}

export default ImageGalleryComponent;
