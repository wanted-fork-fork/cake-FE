import { ImgHTMLAttributes, useCallback, useState } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

Image.defaultProps = {
  fallback:
    "https://cdn.pixabay.com/photo/2021/09/01/16/09/cake-6591719__340.jpg",
};

function Image({ fallback, src, alt, ...props }: Props) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const onError = useCallback(() => setImgSrc(fallback), [fallback]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <img src={imgSrc || fallback} alt={alt} {...props} onError={onError} />
  );
}

export default Image;
