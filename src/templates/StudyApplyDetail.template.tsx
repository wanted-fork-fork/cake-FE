import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import ImageGalleryComponent from "@src/components/molecules/ImageGallery.component";
import SimpleProfileComponent from "@src/components/molecules/SimpleProfile.component";
import { dateToFormatted } from "@src/utils/dayjs.util";
import { LightDivider } from "@src/components/atoms/Divider";
import StudyInfoComponent from "@src/components/molecules/StudyInfo.component";
import ColoredPinIcon from "@src/components/icon/ColoredPin.icon";
import { MouseEventHandler, useMemo } from "react";
import ColoredCopyIcon from "@src/components/icon/ColoredCopy.icon";
import LoadingComponent from "@src/components/molecules/Loading.component";
import {
  ImageWrapper,
  StudyContentsWrapper,
  StudyWrapper,
} from "@src/templates/StudyDetail.template";
import { Button } from "@src/components/atoms/Button";
import Link from "next/link";
import { StudyState } from "@src/constant/enum.constant";

function StudyApplyDetailTemplate({ applyDetail }) {
  const applyButton = useMemo(
    () =>
      !applyDetail || applyDetail.state === StudyState.APPLIED ? (
        <Button color="point" height="44px" fontSize="small" width="100px">
          참여자 선정
        </Button>
      ) : (
        <Link href={`/study/apply/${applyDetail.id}`}>
          <a>
            <Button color="gray" height="44px" fontSize="small" width="100px">
              참여 취소
            </Button>
          </a>
        </Link>
      ),
    [applyDetail],
  );

  const appliedUser = useMemo(
    () =>
      applyDetail
        ? {
            img: applyDetail.profileImg,
            nickname: applyDetail.nickname,
            rate: applyDetail.rate,
          }
        : null,
    [applyDetail],
  );
  return applyDetail ? (
    <PageWrapperComponent title="" button={applyButton}>
      {/* Thumbnail */}
      <ImageWrapper>
        {/* <Image src={study.images ? study.images[0] : null} alt={study.title} /> */}
        <ImageGalleryComponent images={applyDetail.applyFiles} />
      </ImageWrapper>
      <StudyContentsWrapper>
        {/* Profile */}
        <SimpleProfileComponent user={appliedUser} />
        {/* Contents */}
        <StudyWrapper>{applyDetail.msg}</StudyWrapper>
      </StudyContentsWrapper>
    </PageWrapperComponent>
  ) : (
    <LoadingComponent />
  );
}

export default StudyApplyDetailTemplate;
