import { useStores } from "@src/store/root.store";
import { useCallback } from "react";
import CameraIcon from "@src/components/icon/Camera.icon";
import styled from "styled-components";
import { ButtonStyleProps } from "@src/components/atoms/Button";
import theme from "@src/styles/theme";

const IconButton = styled.label<ButtonStyleProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;

  border: 1px solid ${theme.color.gray2};
  border-radius: 50%;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  width: 32px;

  cursor: pointer;

  input {
    display: none;
  }
`;

const S = { IconButton };

function UploadComponent({ onUploaded, setLoading, multiple = false }) {
  const rootStore = useStores();

  const onUploadFile = useCallback(
    async (e) => {
      setLoading(true);
      const uploaded = [];
      e.target.files.forEach((file) => {
        rootStore.uploadImage(file).then((resource) => uploaded.push(resource));
      });
      onUploaded(uploaded);
      setLoading(false);
    },
    [setLoading, rootStore, onUploaded],
  );

  return (
    <form>
      <S.IconButton htmlFor="file" color="gray">
        <CameraIcon />
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={onUploadFile}
          multiple={multiple}
        />
      </S.IconButton>
    </form>
  );
}

export default UploadComponent;
