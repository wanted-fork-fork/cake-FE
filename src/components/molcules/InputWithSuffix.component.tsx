import styled from "styled-components";

type InputWithSuffixProps = {
  input: JSX.Element;
  suffix: JSX.Element;
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;
const SuffixWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;
const S = { Container, SuffixWrapper };
function InputWithSuffixComponent({ input, suffix }: InputWithSuffixProps) {
  return (
    <S.Container>
      {input}
      <S.SuffixWrapper>{suffix}</S.SuffixWrapper>
    </S.Container>
  );
}

export default InputWithSuffixComponent;
