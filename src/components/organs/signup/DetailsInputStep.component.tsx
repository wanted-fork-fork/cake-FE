import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

// store
import { useStores } from "@src/store/root.store";

// util
import { getUnivCategoryList } from "@src/utils/enum.util";

// components
import { UnderlineInput } from "@src/components/atoms/Input";
import SelectComponent from "@src/components/atoms/Select";
import ProfileFrameComponent from "@src/components/molecules/ProfileFrame.component";
import { ErrorMessage } from "@src/components/atoms/text/ErrorMessage";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import { Resource } from "@src/models/dto/api-response";

const Container = styled.div``;

const FormWrapper = styled.div<BaseProps>`
  ${BaseStyleProps};

  div {
    margin-left: auto;
    margin-right: auto;
  }

  text-align: center;
  margin-top: 10px;
  width: 100%;
`;

const NicknameWrapper = styled.div`
  width: 50%;
  margin: 0 auto 20px auto;
`;

const DetailWrapper = styled.div`
  width: 100%;
`;

const S = {
  Container,
  FormWrapper,
  NicknameWrapper,
  DetailWrapper,
};
const DetailsInputStepComponent = observer(() => {
  const { signupStore } = useStores();

  const [nickname, setNickname] = useState("");

  const onUploadImage = useCallback(
    (uploaded: Resource[]) => {
      signupStore.setFormValue("img", uploaded[0].path);
    },
    [signupStore],
  );

  const onSelectUnivCategory = useCallback(
    (e) => {
      signupStore.setFormValue("univCategory", e.target.value);
    },
    [signupStore],
  );

  const onChangeNickname = useCallback(
    (e) => {
      setNickname(e.target.value);
      signupStore.setFormValue("nickname", e.target.value);
      signupStore.cleanErrors();
    },
    [signupStore],
  );

  const univCategoryList = useMemo(() => getUnivCategoryList(), []);
  const univCategory = useMemo(
    () => signupStore.form.univCategory.toString(),
    [signupStore.form],
  );

  return (
    <S.Container>
      <FormWrapper mb="20px">
        <ProfileFrameComponent
          imgSrc={
            signupStore.form.img &&
            process.env.IMAGE_ENDPOINT + signupStore.form.img
          }
          onUploadImage={onUploadImage}
          allowUpload
          mb="20px"
        />
        <NicknameWrapper>
          <UnderlineInput
            value={nickname}
            onChange={onChangeNickname}
            placeholder="?????????"
            type="text"
          />
        </NicknameWrapper>
        <DetailWrapper>
          <SelectComponent
            list={univCategoryList}
            labelKeyName="value"
            idKeyName="key"
            selected={univCategory}
            onSelect={onSelectUnivCategory}
          />
        </DetailWrapper>
      </FormWrapper>
      {signupStore.errors.nickname && (
        <ErrorMessage>{signupStore.errors.nickname}</ErrorMessage>
      )}
    </S.Container>
  );
});

export default DetailsInputStepComponent;
