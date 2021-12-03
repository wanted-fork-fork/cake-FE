import { ImgHTMLAttributes, useCallback, useState } from "react";
import Image from "next/image";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

ImageComponent.defaultProps = {
  fallback:
    "https://cdn.pixabay.com/photo/2021/09/01/16/09/cake-6591719__340.jpg",
};

function ImageComponent({ fallback, src, alt, width, height }: Props) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const onError = useCallback(() => setImgSrc(fallback), [fallback]);

  return (
    <Image
      src={imgSrc || fallback}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      placeholder="empty"
      // eslint-disable-next-line react/jsx-props-no-spreading
      onError={onError}
    />
  );
}

export default ImageComponent;
