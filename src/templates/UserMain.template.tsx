import Link from "next/link";

// components
import { Button } from "@src/components/atoms/Button";
import ColoredSearchIcon from "@src/components/icon/ColoredSearch.icon";
import { CategoryTag } from "@src/components/atoms/CategoryTag";
import BottomNavigationComponent from "@src/components/organs/BottomNavigation.component";

// styles
import theme, { Padding } from "@src/styles/theme";
import styled, { css } from "styled-components";
import StudyListElementComponent from "@src/components/molecules/StudyListElement.component";
import { NoScroll } from "@src/styles/common";
import { BoldDivider, LightDivider } from "@src/components/atoms/Divider";
import { useMemo } from "react";

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
  background-color: ${theme.color.gray3};
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

  strong {
    position: absolute;
    left: 20px;
    bottom: 15px;
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
  h2 {
    margin-bottom: 20px;
  }
`;
const CategoryListElementWrapper = styled.div`
  display: flex;
  button {
    margin-right: 8px;
  }
`;
const StudyListElementWrapper = styled.div`
  ${BasePadding};
`;
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
          elements.push(<BoldDivider my="20px" />);
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
        <strong>Cake와 함께 원하는 스터디를 찾아보세요 😋</strong>
      </Banner>
      <CurationSectionsWrapper>
        <h2>방금 올라온 따끈한 스터디 🍰</h2>
        <CategoryListElementWrapper>
          {categories.map((x) => (
            <CategoryTag key={x}>{x}</CategoryTag>
          ))}
        </CategoryListElementWrapper>
      </CurationSectionsWrapper>
      <LightDivider my="20px" />
      <div>{studyListDom}</div>
      <BottomNavigationComponent />
    </Container>
  );
}

export default UserMainTemplate;
