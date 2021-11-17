import ForkRateIcon from "@src/components/icon/ForkRate.icon";
import styled from "styled-components";
import theme, { FontSize } from "@src/styles/theme";

const Slider = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 50px;
  background-color: ${theme.color.point};
  position: relative;
`;
const MarkerWrapper = styled.div<{ rate: number }>`
  position: absolute;
  left: ${({ rate }) => `calc(${(rate / 5.0) * 100}% - 10px)`};
  top: -28px;
`;
const SliderWrapper = styled.div`
  width: 100%;
  padding-right: 10px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 5px;
`;
const PointTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-bottom: 0;
    font-size: ${FontSize.Small};
    color: ${theme.color.point};
  }
`;

function RateSliderComponent({ rate }) {
  return (
    <SliderWrapper>
      <Slider>
        <MarkerWrapper rate={rate}>
          <ForkRateIcon />
        </MarkerWrapper>
      </Slider>
      <PointTextWrapper>
        <p>0</p>
        <p>2.5</p>
        <p>5</p>
      </PointTextWrapper>
    </SliderWrapper>
  );
}

export default RateSliderComponent;
