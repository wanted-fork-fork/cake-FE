import CoinIcon from "@src/components/icon/Coin.icon";
import { TextButton } from "@src/components/atoms/TextButton";
import styled from "styled-components";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import theme, { Padding } from "@src/styles/theme";

const PointWrapper = styled.div<BaseProps>`
  margin: ${Padding.page};
  ${BaseStyleProps};

  background-color: ${theme.color.point};
  border-radius: 9px;
  color: #fff;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  svg {
    display: flex;
    align-items: center;
  }
  p {
    margin-bottom: 0;
    width: 50%;
  }
`;
const PointButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;

function PointDetailComponent({ point, mb }) {
  return (
    <PointWrapper mb={mb}>
      <div>
        <CoinIcon />
      </div>
      <p>{point}</p>
      <PointButtonWrapper>
        <TextButton fontSize="small" color="white">
          <b>충전하기</b>
        </TextButton>
        <span>|</span>
        <TextButton fontSize="small" color="white">
          <b>환급하기</b>
        </TextButton>
      </PointButtonWrapper>
    </PointWrapper>
  );
}

export default PointDetailComponent;
