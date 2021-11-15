// components
import RightArrowIcon from "@src/components/icon/RightArrow.icon";
import CoinIcon from "@src/components/icon/Coin.icon";
import StarIcon from "@src/components/icon/Star.icon";
import ForkRateIcon from "@src/components/icon/ForkRate.icon";
import { TextButton } from "@src/components/atoms/TextButton";
import { BoldDivider } from "@src/components/atoms/Divider";
import ProfileFrameComponent from "@src/components/molecules/ProfileFrame.component";
import styled, { css } from "styled-components";
import theme, { FontSize, Padding } from "@src/styles/theme";
import BottomNavigationComponent from "@src/components/organs/BottomNavigation.component";
import { NaviType } from "@src/constant/enum.constant";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 80px;

  h3 {
    font-size: ${FontSize.PrimaryDescription};
  }
`;
const ProfileWrapper = styled.div<BaseProps>`
  ${BaseStyleProps};
  padding: ${Padding.page};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
const ProfileInfoWrapper = styled.div`
  width: 100%;
  p {
    margin-bottom: 0;
  }
`;
const Nickname = styled.p`
  font-size: ${FontSize.Default};
`;

const Email = styled.p`
  font-size: ${FontSize.SecondaryLabel};
`;

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
const InfoBox = styled.div`
  //padding: 10px;
  p {
    font-size: ${FontSize.SecondaryLabel};
  }
`;

const InfoBoxContainer = styled.div<BaseProps>`
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

const InfoBoxTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin-bottom: 0;
  }
  p {
    margin-bottom: 0;
    text-align: left;
  }
`;

const CategoryListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px;
  cursor: pointer;
  div {
    width: calc((100vw - 40px - 40px) / 6 - 10px);
    height: calc((100vw - 40px - 40px) / 6 - 10px);
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid ${theme.color.point};
  }
  img {
    width: calc((100vw - 40px - 40px) / 6 - 10px);
    height: calc((100vw - 40px - 40px) / 6 - 10px);
  }
`;

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
const RateWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: ${FontSize.Small};
`;

const BottomWrapper = styled.div`
  ${TextButton} {
    text-align: left;
  }

  padding: ${Padding.page};
  height: 300px;
`;

const BottomButtonWrapper = styled.div`
  position: absolute;
  bottom: 100px;
`;

function MyPageTemplate({ profile }) {
  return (
    <Container>
      {/* Profile */}
      <ProfileWrapper mb="20px">
        <ProfileFrameComponent imgSrc={profile.img} allowUpload size="medium" />
        <ProfileInfoWrapper>
          <Nickname>{profile.user.nickname}</Nickname>
          <Email>{profile.user.email}</Email>
        </ProfileInfoWrapper>
        <div>
          <RightArrowIcon />
        </div>
      </ProfileWrapper>
      {/*  Point */}
      <PointWrapper mb="20px">
        <div>
          <CoinIcon />
        </div>
        <p>{profile.point}</p>
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
      {/*  InfoBox */}
      <InfoBoxContainer>
        {/* 신뢰도 */}
        <InfoBox>
          <InfoBoxTitleWrapper>
            <h3>신뢰도</h3>
          </InfoBoxTitleWrapper>
          <RateWrapper>
            <StarIcon />
            {profile.user.rate}
          </RateWrapper>
          {/* Slider */}
          <SliderWrapper>
            <Slider>
              <MarkerWrapper rate={profile.user.rate}>
                <ForkRateIcon />
              </MarkerWrapper>
            </Slider>
            <PointTextWrapper>
              <p>0</p>
              <p>2.5</p>
              <p>5</p>
            </PointTextWrapper>
          </SliderWrapper>
        </InfoBox>
        {/* 스터디 횟수 */}
        <InfoBox>
          <InfoBoxTitleWrapper>
            <h3>스터디 횟수</h3>
          </InfoBoxTitleWrapper>
          <p>{profile.studyCount}회</p>
        </InfoBox>
        {/* 카테고리 - GIVE */}
        <InfoBox>
          <InfoBoxTitleWrapper>
            <h3>Give</h3>
            <div>
              <RightArrowIcon />
            </div>
          </InfoBoxTitleWrapper>
          <CategoryListWrapper>
            {profile.give.map((x) => (
              <div key={x.id}>
                <img src={x.img} alt={x.name} />
              </div>
            ))}
          </CategoryListWrapper>
        </InfoBox>
        {/* 카테고리 - TAKE */}
        <InfoBox>
          <InfoBoxTitleWrapper>
            <h3>Take</h3>
            <div>
              <RightArrowIcon />
            </div>
          </InfoBoxTitleWrapper>
          <CategoryListWrapper>
            {profile.take.map((x) => (
              <div key={x.id}>
                <img src={x.img} alt={x.name} key={x.id} />
              </div>
            ))}
          </CategoryListWrapper>
        </InfoBox>
      </InfoBoxContainer>

      <BoldDivider my="20px" />

      <BottomWrapper>
        <InfoBoxTitleWrapper>
          <TextButton>
            <p>이용 약관</p>
          </TextButton>
          <div>
            <RightArrowIcon />
          </div>
        </InfoBoxTitleWrapper>
        <BottomButtonWrapper>
          <TextButton fontSize="small" mb="10px">
            로그아웃
          </TextButton>
          <TextButton fontSize="small">회원탈퇴</TextButton>
        </BottomButtonWrapper>
      </BottomWrapper>

      <BottomNavigationComponent selected={NaviType.PROFILE} />
    </Container>
  );
}

export default MyPageTemplate;
