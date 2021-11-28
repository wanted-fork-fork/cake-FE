import { StudyState } from "@src/constant/enum.constant";

// components
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import ImageGalleryComponent from "@src/components/molecules/ImageGallery.component";
import SimpleProfileComponent from "@src/components/molecules/SimpleProfile.component";
import { useMemo } from "react";
import LoadingComponent from "@src/components/molecules/Loading.component";
import {
  ImageWrapper,
  StudyContentsWrapper,
  StudyWrapper,
} from "@src/templates/StudyDetail.template";
import { Button } from "@src/components/atoms/Button";
import PopupComponent from "@src/components/organs/Popup.component";
import StudyDetailSkeleton from "@src/components/skeletons/StudyDetail.skeleton";

function StudyApplyDetailTemplate({
  applyDetail,
  onClickApproval,
  popupVisible,
  onClosePopup,
  popupMessage,
}) {
  const applyButton = useMemo(() => {
    if (!applyDetail) return "";
    switch (applyDetail.state) {
      case StudyState.APPLIED:
        return (
          <Button
            color="point"
            height="44px"
            fontSize="small"
            width="100px"
            onClick={() => onClickApproval(StudyState.JOINED)}
          >
            참여자 선정
          </Button>
        );
      case StudyState.JOINED:
        return (
          <Button
            color="gray"
            height="44px"
            fontSize="small"
            width="100px"
            onClick={() => onClickApproval(StudyState.REJECTED)}
          >
            참여 취소
          </Button>
        );
      case StudyState.REJECTED:
        return (
          <Button
            color="gray"
            height="44px"
            fontSize="small"
            width="100px"
            disabled
            onClick={() => onClickApproval(StudyState.REJECTED)}
          >
            취소됨
          </Button>
        );
      default:
        return "";
    }
  }, [applyDetail, onClickApproval]);

  const appliedUser = useMemo(
    () =>
      applyDetail
        ? {
            id: applyDetail.userId,
            img: applyDetail.profileImg,
            nickname: applyDetail.nickname,
            rate: applyDetail.rate,
          }
        : null,
    [applyDetail],
  );
  return (
    <PageWrapperComponent title="" button={applyButton}>
      {applyDetail ? (
        <div>
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
          {popupVisible && (
            <PopupComponent
              bottom={
                <Button color="point" onClick={onClosePopup} height="48px">
                  확인
                </Button>
              }
              description={popupMessage}
            />
          )}
        </div>
      ) : (
        <StudyDetailSkeleton showTitle={false} />
      )}
    </PageWrapperComponent>
  );
}

export default StudyApplyDetailTemplate;
