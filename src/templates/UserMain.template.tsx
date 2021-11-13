import Link from "next/link";
import { useMemo } from "react";

// components
import { Button } from "@src/components/atoms/Button";
import ColoredSearchIcon from "@src/components/icon/ColoredSearch.icon";
import { CategoryTag } from "@src/components/atoms/CategoryTag";
import BottomNavigationComponent from "@src/components/organs/BottomNavigation.component";
import CakeIcon from "@src/components/icon/Cake.icon";
import { TextButton } from "@src/components/atoms/TextButton";
import { BoldDivider, LightDivider } from "@src/components/atoms/Divider";
import StudyListElementComponent from "@src/components/molecules/StudyListElement.component";

// styles
import theme, { Color, FontSize, Padding } from "@src/styles/theme";
import styled, { css } from "styled-components";
import { NoScroll } from "@src/styles/common";

const Container = styled.div`
  ${NoScroll};
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 100px;
  overflow: auto;
`;
const Banner = styled.div`
  height: 182px;
  background: ${Color.mainGradient};
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  color: #fff;
  p {
    font-family: "GmarketSans";
    margin-top: 20px;
    margin-left: 20px;
  }
  strong {
    font-family: "GmarketSans";
    font-size: ${FontSize.MainTitleStrong};
  }
  button {
    position: absolute;
    left: 20px;
    bottom: 20px;
    width: 85px;
    height: 32px;
    font-size: ${FontSize.PrimaryDescription};
  }
  svg {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;
const BasePadding = css`
  padding: 0 ${Padding.pageX};
`;
const HeaderSectionsWrapper = styled.div`
  ${BasePadding};
  margin-bottom: 20px;
`;
const CurationSectionsWrapper = styled.div`
  ${BasePadding};
  padding-bottom: 20px;
  h2 {
    margin-bottom: 20px;
    font-size: ${FontSize.SubTitle};
  }
`;
const CategoryListElementWrapper = styled.div`
  display: flex;
  button {
    margin-right: 8px;
  }
`;
const StudyListElementWrapper = styled.div``;
const SearchContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${Padding.pageX};
  svg {
    margin-right: 10px;
  }
`;

const categories = ["일러스트", "운동", "JAVA"];
function UserMainTemplate({ studyList = [] }) {
  const studyListDom = useMemo(
    () =>
      studyList.map((study, index) => {
        const elements = [];
        elements.push(
          <StudyListElementWrapper key={study.id}>
            <StudyListElementComponent study={study} />
          </StudyListElementWrapper>,
        );
        if (index < studyList.length - 1)
          elements.push(<BoldDivider key={`${study.id}-div`} />);
        return elements;
      }),
    [studyList],
  );
  return (
    <Container>
      <HeaderSectionsWrapper>
        <Link href="/search">
          <a>
            <Button
              color={theme.color.gray1}
              textAlign="left"
              shape="full-rounded"
              height="48px"
              fontSize="small"
            >
              <SearchContentsWrapper>
                <ColoredSearchIcon />
                <span>어떤 스터디 원해?</span>
              </SearchContentsWrapper>
            </Button>
          </a>
        </Link>
      </HeaderSectionsWrapper>
      <Banner>
        <p>
          재능공유가 쉬워진다!
          <br />
          우리학교 재능공유 플랫폼{" "}
          <strong>
            Cake<i>!</i>
          </strong>
        </p>
        <CakeIcon />
        <Button color="white">더보기</Button>
      </Banner>
      <CurationSectionsWrapper>
        <h2>방금 올라온 따끈한 스터디 🍰</h2>
        <CategoryListElementWrapper>
          {categories.map((x) => (
            <CategoryTag key={x}>{x}</CategoryTag>
          ))}
        </CategoryListElementWrapper>
      </CurationSectionsWrapper>
      <LightDivider />
      <div>{studyListDom}</div>
      {hasMore && <TextButton>더보기</TextButton>}
      <BottomNavigationComponent />
    </Container>
  );
}

export default UserMainTemplate;
