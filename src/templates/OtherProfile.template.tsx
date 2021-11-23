import styled from "styled-components";

// components
import DetailUserInfoComponent from "@src/components/organs/profile/DetailUserInfo.component";
import StarIcon from "@src/components/icon/Star.icon";
import RateSliderComponent from "@src/components/organs/profile/RateSlider.component";
import ProfileCategoryListBox from "@src/components/organs/profile/ProfileCategoryListBox";
import LoadingComponent from "@src/components/molecules/Loading.component";
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";

// styles
import {
  InfoBox,
  InfoBoxContainer,
  InfoBoxTitleWrapper,
  RateWrapper,
} from "@src/templates/MyPage.template";
import { FontSize } from "@src/styles/theme";

const Container = styled.div`
  padding-bottom: 80px;

  h3 {
    font-size: ${FontSize.PrimaryDescription};
  }
`;

function OtherProfileTemplate({ profile }) {
  return (
    <PageWrapperComponent title="프로필" button={null}>
      <Container>
        {profile ? (
          <div>
            {/* Profile */}
            <DetailUserInfoComponent
              user={profile}
              mb="20px"
              allowModify={false}
            />
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
                  allowModify={false}
                />
              </InfoBox>
              {/* 카테고리 - TAKE */}
              <InfoBox>
                <ProfileCategoryListBox
                  title="Take"
                  categories={profile.take}
                  allowModify={false}
                />
              </InfoBox>
            </InfoBoxContainer>
          </div>
        ) : (
          <LoadingComponent />
        )}
      </Container>
    </PageWrapperComponent>
  );
}

export default OtherProfileTemplate;
