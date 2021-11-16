import { useStores } from "@src/store/root.store";
import { useCallback } from "react";
import CameraIcon from "@src/components/icon/Camera.icon";
import styled from "styled-components";
import { ButtonStyleProps } from "@src/components/atoms/Button";
import theme from "@src/styles/theme";
import { Resource } from "@src/models/dto/api-response";

const IconButton = styled.label<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    display: none;
  }
`;

const S = { IconButton };

function UploadComponent({ icon, onUploaded, setLoading, multiple = false }) {
  const rootStore = useStores();

  const onUploadFile = useCallback(
    async (e) => {
      setLoading(true);

      const uploaded = await Promise.all(
        Object.entries(e.target.files).map((file) =>
          rootStore.uploadImage(file[1]),
        ),
      );

      onUploaded(uploaded);
      setLoading(false);
    },
    [setLoading, rootStore, onUploaded],
  );

  return (
    <form>
      <S.IconButton htmlFor="file" color="gray">
        {icon}
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
