import { Switch } from "antd";
import Link from "next/link";
import styled from "styled-components";

// components
import ProfileFrameComponent from "@src/components/molecules/ProfileFrame.component";
import StarIcon from "@src/components/icon/Star.icon";
import DocumentIcon from "@src/components/icon/Document.icon";
import { FontSize } from "@src/styles/theme";

const Container = styled.div`
  display: grid;
  grid-template-columns: 52px auto 52px 52px;
  align-items: center;
  gap: 20px;
`;
const InfoWrapper = styled.div`
  width: 100%;
`;

const Nickname = styled.p`
  margin-bottom: 5px;
  font-size: ${FontSize.Default};
`;
const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
  span {
    font-size: ${FontSize.Small};
  }
`;
const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ApplierListElementComponent({ userInfo }) {
  return (
    <Container>
      <ProfileFrameComponent
        size="mid-small"
        imgSrc={userInfo.profileImg}
        allowUpload={false}
      />
      <InfoWrapper>
        <Nickname>{userInfo.nickname}</Nickname>
        <RateWrapper>
          <StarIcon />
          <span>{userInfo.rate || "비공개"}</span>
        </RateWrapper>
      </InfoWrapper>
      <CenterWrapper>
        <Switch />
      </CenterWrapper>
      <CenterWrapper>
        <Link href="/apply">
          <a>
            <DocumentIcon />
          </a>
        </Link>
      </CenterWrapper>
    </Container>
  );
}

export default ApplierListElementComponent;
