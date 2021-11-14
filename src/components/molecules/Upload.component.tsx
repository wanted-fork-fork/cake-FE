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

function UploadComponent({ onUploaded, setLoading }) {
  const rootStore = useStores();

  const onUploadFile = useCallback(
    async (e) => {
      setLoading(true);
      const file = e.target.files[0];
      const uploaded = await rootStore.uploadImage(file);
      onUploaded(uploaded);
      setLoading(false);
    },
    [rootStore, onUploaded],
  );

  return (
    <form>
      <S.IconButton htmlFor="file" color="gray">
        <CameraIcon />
        <input id="file" type="file" onChange={onUploadFile} />
      </S.IconButton>
    </form>
  );
}

export default UploadComponent;
