import styled from "styled-components";
import Link from "next/link";
import { MouseEventHandler, useMemo } from "react";

// lib
import { dateToFormatted } from "@src/utils/dayjs.util";
import useCopyClipboardHook from "@src/hooks/useCopyClipboard.hook";

// components
import ColoredPinIcon from "@src/components/icon/ColoredPin.icon";
import ColoredCopyIcon from "@src/components/icon/ColoredCopy.icon";
import { LightDivider } from "@src/components/atoms/Divider";
import { Button } from "@src/components/atoms/Button";
import StudyInfoComponent from "@src/components/molecules/StudyInfo.component";
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import SimpleProfileComponent from "@src/components/molecules/SimpleProfile.component";
import ImageGalleryComponent from "@src/components/molecules/ImageGallery.component";
import StudyDetailSkeleton from "@src/components/skeletons/StudyDetail.skeleton";

// styles
import theme, { FontSize, Padding, windowSize } from "@src/styles/theme";

export const StudyContentsWrapper = styled.div`
  padding: 20px ${Padding.pageX} 0;
  h3 {
    margin-bottom: 7px;
  }
  p {
    margin-bottom: 0;
    font-size: ${FontSize.Small};
  }
`;

export const ImageWrapper = styled.div`
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
  gap: 5px;
  div {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    margin-bottom: 0;
  }
  button {
    cursor: pointer;
    margin-left: 10px;
    background-color: transparent;
    outline: none;
    border: 0;
    display: flex;
    align-items: center;
    color: ${theme.color.primary};
    width: 80px;
    float: right;
    font-size: ${FontSize.Small};
  }
`;

export const StudyWrapper = styled.div`
  white-space: pre-wrap;
  margin-top: 20px;
  padding-bottom: 20px;
`;

function StudyDetailTemplate({ study }) {
  const [copied, onCopy] = useCopyClipboardHook(study?.storeAddress || "");

  const applyButton = useMemo(
    () =>
      !study || !study.apply ? (
        <Button
          data-testid="study-apply-btn"
          disabled
          color="point"
          height="44px"
          fontSize="small"
          width="100px"
        >
          ?????? ??????
        </Button>
      ) : (
        <Link href={`/study/apply/${study.id}`}>
          <a>
            <Button
              data-testid="study-apply-btn"
              disabled={false}
              color="point"
              height="44px"
              fontSize="small"
              width="100px"
            >
              ?????? ??????
            </Button>
          </a>
        </Link>
      ),
    [study],
  );

  return (
    <PageWrapperComponent title="" button={applyButton}>
      {study ? (
        <div>
          {/* Thumbnail */}
          <ImageWrapper>
            {/* <Image src={study.images ? study.images[0] : null} alt={study.title} /> */}
            <ImageGalleryComponent images={study.images} />
          </ImageWrapper>
          <StudyContentsWrapper>
            {/* Profile */}
            <SimpleProfileComponent user={study.user} />
            {/*  Title */}
            <div>
              <h3>{study.title}</h3>
              <p>{dateToFormatted(study.createdAt, "YYYY.MM.DD")} ??????</p>
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
                    <p>{study.storeName}</p>
                    <p>{study.storeAddress}</p>
                  </div>
                  <button
                    type="button"
                    onClick={onCopy as MouseEventHandler<HTMLButtonElement>}
                  >
                    <ColoredCopyIcon />
                    {copied ? <div>?????? ??????!</div> : <div>??????</div>}
                  </button>
                </LocationWrapper>
              )}
            </div>

            {/* Contents */}
            <StudyWrapper>{study.content}</StudyWrapper>
          </StudyContentsWrapper>
        </div>
      ) : (
        <StudyDetailSkeleton />
      )}
    </PageWrapperComponent>
  );
}

export default StudyDetailTemplate;
