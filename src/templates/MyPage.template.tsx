import styled from "styled-components";
import Link from "next/link";

// lib
import { NaviType } from "@src/constant/enum.constant";
import { UserMyPageDto } from "@src/models/dto/user.dto";

// components
import RightArrowIcon from "@src/components/icon/RightArrow.icon";
import StarIcon from "@src/components/icon/Star.icon";
import { TextButton } from "@src/components/atoms/TextButton";
import { BoldDivider } from "@src/components/atoms/Divider";
import BottomNavigationComponent from "@src/components/organs/BottomNavigation.component";
import DetailUserInfoComponent from "@src/components/organs/profile/DetailUserInfo.component";
import RateSliderComponent from "@src/components/organs/profile/RateSlider.component";
import ProfileCategoryListBox from "@src/components/organs/profile/ProfileCategoryListBox";
import LoadingComponent from "@src/components/molecules/Loading.component";

// styles
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import theme, { FontSize, Padding } from "@src/styles/theme";
import TermPopupComponent from "@src/components/organs/TermPopup.component";
import Term from "@src/components/atoms/terms/Term";
import Privacy from "@src/components/atoms/terms/Privacy";
import useVisibleHook from "@src/hooks/useVisible.hook";

export const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 80px;

  h3 {
    font-size: ${FontSize.PrimaryDescription};
  }
`;

export const InfoBox = styled.div`
  //padding: 10px;
  p {
    font-size: ${FontSize.SecondaryLabel};
  }
`;

export const InfoBoxContainer = styled.div<BaseProps>`
  ${BaseStyleProps};

  margin: ${Padding.page};
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid ${theme.color.point};
  border-radius: 9px;
  padding: 10px;

  ${InfoBox}:nth-child(odd) {
    border-right: 1px solid ${theme.color.gray3};
  }
  ${InfoBox}:nth-child(even) {
    padding-left: 10px;
  }
  ${InfoBox}:nth-child(1) {
    border-bottom: 1px solid ${theme.color.gray3};
  }
  ${InfoBox}:nth-child(2) {
    border-bottom: 1px solid ${theme.color.gray3};
  }
`;

export const InfoBoxTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  h3 {
    margin-bottom: 0;
  }
  p {
    margin-bottom: 0;
    text-align: left;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const RateWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: ${FontSize.Small};
`;

const TermButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomWrapper = styled.div`
  ${TextButton} {
    text-align: left;
  }

  padding: ${Padding.page};
  min-height: 300px;
`;

const BottomButtonWrapper = styled.div`
  position: absolute;
  bottom: 100px;
`;

function MyPageTemplate({ profile = null as UserMyPageDto }) {
  const [termVisible, setTermVisible, setTermInvisible] = useVisibleHook(false);
  const [privacyVisible, setPrivacyVisible, setPrivacyInvisible] =
    useVisibleHook(false);

  return (
    <Container>
      {profile ? (
        <div>
          {/* Profile */}
          <DetailUserInfoComponent user={profile} mb="20px" />
          {/*  Point */}
          {/* TODO:: 2021.11.27. 현재 포인트 사용하지 않게 되어 삭제함. 포인트 추가하게 되었을 때 다시 추가 */}
          {/* <PointDetailComponent point={profile.point} mb="20px" /> */}
          {/*  InfoBox */}
          <InfoBoxContainer>
            {/* 신뢰도 */}
            <InfoBox>
              <InfoBoxTitleWrapper>
                <h3>신뢰도</h3>
              </InfoBoxTitleWrapper>
              <RateWrapper>
                <StarIcon />
                {profile.rate || 0}
              </RateWrapper>
              {/* Slider */}
              <RateSliderComponent rate={profile.rate || 0} />
            </InfoBox>
            {/* 스터디 횟수 */}
            <InfoBox>
              <InfoBoxTitleWrapper>
                <h3>스터디 횟수</h3>
              </InfoBoxTitleWrapper>
              <p>{profile.studyCnt}회</p>
            </InfoBox>
            {/* 카테고리 - GIVE */}
            <InfoBox>
              <ProfileCategoryListBox
                title="Give"
                categories={profile.give}
                pr="10px"
              />
            </InfoBox>
            {/* 카테고리 - TAKE */}
            <InfoBox>
              <ProfileCategoryListBox title="Take" categories={profile.take} />
            </InfoBox>
          </InfoBoxContainer>

          <BoldDivider my="20px" />

          {/* 약관 */}
          <BottomWrapper>
            <TextButton mb="10px" onClick={setTermVisible}>
              <TermButtonWrapper>
                <span>이용 약관</span>
                <RightArrowIcon />
              </TermButtonWrapper>
            </TextButton>
            <TextButton onClick={setPrivacyVisible}>
              <TermButtonWrapper>
                <span>개인정보처리방침</span>
                <RightArrowIcon />
              </TermButtonWrapper>
            </TextButton>

            <BottomButtonWrapper>
              <Link href="/logout">
                <a>
                  <TextButton fontSize="small" mb="10px">
                    로그아웃
                  </TextButton>
                </a>
              </Link>
              <TextButton fontSize="small">회원탈퇴</TextButton>
            </BottomButtonWrapper>
          </BottomWrapper>
        </div>
      ) : (
        <LoadingComponent />
      )}

      <TermPopupComponent
        title="이용약관"
        visible={termVisible}
        setInvisible={setTermInvisible}
      >
        <Term />
      </TermPopupComponent>
      <TermPopupComponent
        title="개인정보처리방침"
        visible={privacyVisible}
        setInvisible={setPrivacyInvisible}
      >
        <Privacy />
      </TermPopupComponent>

      <BottomNavigationComponent selected={NaviType.PROFILE} />
    </Container>
  );
}

export default MyPageTemplate;
