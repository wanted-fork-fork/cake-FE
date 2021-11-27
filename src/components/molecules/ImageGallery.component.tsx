import styled from "styled-components";
import ImageGallery, {
  fullscreen as activateFullscreen,
} from "react-image-gallery";
import { useCallback, useMemo, useRef, useState } from "react";

// styles
import "react-image-gallery/styles/css/image-gallery.css";
import theme, { FontSize, nowWindowSize } from "@src/styles/theme";

interface ContainerProp {
  fullscreen?: boolean;
}
const Container = styled.div<ContainerProp>`
  .image-gallery {
    width: ${({ fullscreen = false }) => (fullscreen ? "auto" : nowWindowSize)};
    z-index: ${({ fullscreen = false }) => (fullscreen ? "10000" : "")};
  }
  .image-gallery.fullscreen-modal {
    background: rgba(0, 0, 0, 0.5);
  }
  .image-gallery-index {
    top: -40px;
    right: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    background: transparent;
    width: fit-content;
    font-size: ${FontSize.PrimaryDescription};
  }
  .image-gallery-image {
    height: ${({ fullscreen = false }) => (fullscreen ? "auto" : "250px")};
  }
  position: relative;
`;

const NowNumberWrapper = styled.div`
  font-size: ${FontSize.Small};
  background-color: ${theme.color.point};
  color: #fff;
  padding: 5px 13px;
  width: fit-content;
  border-radius: 50px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0);
`;

function ImageGalleryComponent({ images = [] as string[] }) {
  const ref = useRef(null);
  const [now, setNow] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const imageList = useMemo(
    () =>
      images.map((x) => ({
        original: x,
        thumbnailHeight: "250px",
        thumbnailWidth: "auto",
      })),
    [images],
  );
  const imageStatusDom = useMemo(
    () => (
      <NowNumberWrapper>
        {now + 1} / {images.length}
      </NowNumberWrapper>
    ),
    [now, images],
  );

  const onClick = useCallback(() => {
    if (fullscreen) ref.current.exitFullScreen();
    else ref.current.fullScreen();
  }, [ref, fullscreen]);

  return (
    <Container fullscreen={fullscreen}>
      <ImageGallery
        ref={ref}
        items={imageList}
        onClick={onClick}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={false}
        showNav={false}
        showIndex={fullscreen}
        useBrowserFullscreen={false}
        onBeforeSlide={setNow}
        onScreenChange={setFullscreen}
      >
        hi
      </ImageGallery>
      {imageStatusDom}
      {/* {popupImgSrc && ( */}
      {/*  <Popup onClick={onClickPopup}> */}
      {/*    <img src={popupImgSrc} alt="popup" /> */}
      {/*  </Popup> */}
      {/* )} */}
    </Container>
  );
}

export default ImageGalleryComponent;
