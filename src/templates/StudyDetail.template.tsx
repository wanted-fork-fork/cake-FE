import Image from "@src/components/atoms/Image";
import styled from "styled-components";
import Link from "next/link";

// lib
import { dateToFormatted } from "@src/utils/dayjs.util";

// components
import StarIcon from "@src/components/icon/Star.icon";
import ColoredPinIcon from "@src/components/icon/ColoredPin.icon";
import ColoredCopyIcon from "@src/components/icon/ColoredCopy.icon";
import { LightDivider } from "@src/components/atoms/Divider";
import { Button } from "@src/components/atoms/Button";
import ProfileFrameComponent from "@src/components/molecules/ProfileFrame.component";
import StudyInfoComponent from "@src/components/molecules/StudyInfo.component";
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";

// styles
import theme, { FontSize, Padding, windowSize } from "@src/styles/theme";
import { useMemo } from "react";

const StudyContentsWrapper = styled.div`
  padding: 20px ${Padding.pageX} 0;
  h3 {
    margin-bottom: 7px;
  }
  p {
    margin-bottom: 0;
    font-size: ${FontSize.Small};
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
  font-size: ${FontSize.Small};
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
    font-size: ${FontSize.Small};
  }
`;

const StudyWrapper = styled.div`
  white-space: pre-wrap;
  margin-top: 20px;
`;

function StudyDetailTemplate({ study }) {
  const applyButton = useMemo(
    () =>
      !study || study.apply ? (
        <Button
          disabled
          color="point"
          height="44px"
          fontSize="small"
          width="100px"
        >
          참여 신청
        </Button>
      ) : (
        <Link href={`/study/apply/${study.id}`}>
          <a>
            <Button
              disabled={false}
              color="point"
              height="44px"
              fontSize="small"
              width="100px"
            >
              참여 신청
            </Button>
          </a>
        </Link>
      ),
    [study, study],
  );

  return study ? (
    <PageWrapperComponent title="" backLink="/" button={applyButton}>
      {/* Thumbnail */}
      <ImageWrapper>
        <Image alt={study.title} />
      </ImageWrapper>
      <StudyContentsWrapper>
        {/* Profile */}
        <ProfileWrapper>
          <ProfileFrameComponent
            allowUpload={false}
            size="small"
            imgSrc={study.user.img}
          />
          <span>{study.user.nickname}</span>
          <span>
            <StarIcon />
            <span>{study.user.rate || "비공개"}</span>
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
        <StudyWrapper>{study.content}</StudyWrapper>
      </StudyContentsWrapper>
    </PageWrapperComponent>
  ) : (
    <p>loading</p>
  );
}

export default StudyDetailTemplate;
