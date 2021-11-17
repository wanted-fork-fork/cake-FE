import Image from "@src/components/atoms/Image";
import styled from "styled-components";
import Link from "next/link";

// lib
import { dateToFormatted } from "@src/utils/dayjs.util";

// components
import ColoredPinIcon from "@src/components/icon/ColoredPin.icon";
import ColoredCopyIcon from "@src/components/icon/ColoredCopy.icon";
import { LightDivider } from "@src/components/atoms/Divider";
import { Button } from "@src/components/atoms/Button";
import StudyInfoComponent from "@src/components/molecules/StudyInfo.component";
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import SimpleProfileComponent from "@src/components/molecules/SimpleProfile.component";

// styles
import theme, { FontSize, Padding, windowSize } from "@src/styles/theme";
import { useMemo } from "react";
import LoadingComponent from "@src/components/molecules/Loading.component";

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
  padding-bottom: 20px;
`;

function StudyDetailTemplate({ study }) {
  const applyButton = useMemo(
    () =>
      !study || !study.apply ? (
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
    [study],
  );

  return study ? (
    <PageWrapperComponent title="" button={applyButton}>
      {/* Thumbnail */}
      <ImageWrapper>
        <Image src={study.images ? study.images[0] : null} alt={study.title} />
      </ImageWrapper>
      <StudyContentsWrapper>
        {/* Profile */}
        <SimpleProfileComponent user={study.user} />
        {/*  Title */}
        <div>
          <h3>{study.title}</h3>
          <p>{dateToFormatted(study.createdAt, "YYYY.MM.DD")} 게시</p>
        </div>
        <LightDivider my="10px" />
        {/* Info */}
        <div>
          <StudyInfoComponent study={study} />
          {study.storeName && (
            <LocationWrapper>
              <div>
                <ColoredPinIcon />
              </div>
              <div>
                <span>{study.storeName}</span>
                <span>({study.storeAddress})</span>
              </div>
              <button type="button">
                <ColoredCopyIcon />
                <div>복사</div>
              </button>
            </LocationWrapper>
          )}
        </div>
        {/* Contents */}
        <StudyWrapper>{study.content}</StudyWrapper>
      </StudyContentsWrapper>
    </PageWrapperComponent>
  ) : (
    <LoadingComponent />
  );
}

export default StudyDetailTemplate;
