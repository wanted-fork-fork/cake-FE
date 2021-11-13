import Image from "@src/components/atoms/Image";
import ProfileFrameComponent from "@src/components/molecules/ProfileFrame.component";
import StarIcon from "@src/components/icon/Star.icon";
import { dateToFormatted } from "@src/utils/dayjs.util";
import { LightDivider } from "@src/components/atoms/Divider";
import StudyInfoComponent from "@src/components/molecules/StudyInfo.component";
import ColoredPinIcon from "@src/components/icon/ColoredPin.icon";
import ColoredCopyIcon from "@src/components/icon/ColoredCopy.icon";
import styled from "styled-components";
import theme, { FontSize, Padding, windowSize } from "@src/styles/theme";
import { BottomSection } from "@src/components/atoms/BottomSection";
import { Button } from "@src/components/atoms/Button";
import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";
import { NoScroll } from "@src/styles/common";

const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 80px;
  overflow: auto;
  height: 100vh;
  ${NoScroll};
`;
const StudyContentsWrapper = styled.div`
  padding: 20px ${Padding.pageX} 0;
  h3 {
    margin-bottom: 2px;
  }
  p {
    margin-bottom: 0;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  img {
    width: ${windowSize.mobile};
    height: auto;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
  span {
    display: flex;
    align-items: center;
    svg {
      margin-bottom: 3px;
      margin-right: 4px;
    }
  }
`;

const LocationWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: ${FontSize.Small};
  button {
    cursor: pointer;
    margin-left: 5px;
    background-color: transparent;
    outline: none;
    border: 0;
    display: flex;
    align-items: center;
    color: ${theme.color.primary};
    width: 70px;
    float: right;
  }
`;

const StudyWrapper = styled.div`
  white-space: pre-wrap;
  margin-top: 20px;
`;

const SubmitWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;
function StudyDetailTemplate({ study }) {
  return (
    <Container>
      <TitleHeaderComponent title="" backLink="/" />
      {/* Thumbnail */}
      <ImageWrapper>
        <Image alt={study.title} />
      </ImageWrapper>
      <StudyContentsWrapper>
        {/* Profile */}
        <ProfileWrapper>
          <ProfileFrameComponent allowUpload={false} size="small" />
          <span>아주대애기</span>
          <span>
            <StarIcon />
            <span>4.8</span>
          </span>
        </ProfileWrapper>
        {/*  Title */}
        <div>
          <h3>{study.title}</h3>
          <p>{dateToFormatted(study.createdAt, "YYYY.MM.DD")} 게시</p>
        </div>
        <LightDivider my="10px" />
        {/* Info */}
        <div>
          <StudyInfoComponent study={study} />
          <LocationWrapper>
            <div>
              <ColoredPinIcon />
            </div>
            <span>{study.location}</span>
            <button type="button">
              <ColoredCopyIcon />
              <div>복사</div>
            </button>
          </LocationWrapper>
        </div>
        {/* Contents */}
        <StudyWrapper>{study.contents}</StudyWrapper>
      </StudyContentsWrapper>
      <BottomSection>
        <SubmitWrapper>
          <Button color="point" height="44px" fontSize="small" width="100px">
            참여 신청
          </Button>
        </SubmitWrapper>
      </BottomSection>
    </Container>
  );
}

export default StudyDetailTemplate;
