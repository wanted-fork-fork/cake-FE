import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

// lib
import { useStores } from "@src/store/root.store";

// components
import { Button } from "@src/components/atoms/Button";
import { CategoryTag } from "@src/components/atoms/CategoryTag";
import PencilIcon from "@src/components/icon/Pencil.icon";
import CakeIcon from "@src/components/icon/Cake.icon";
import BottomNavigationComponent from "@src/components/organs/BottomNavigation.component";
import FloatingButtonComponent from "@src/components/molecules/FloatingButton.component";
import StudyListComponent from "@src/components/organs/StudyList.component";
import SearchLikeFilterLinkButtonComponent from "@src/components/molecules/SearchLikeFilterLinkButton.component";

// styles
import { Color, FontSize, Padding } from "@src/styles/theme";
import styled, { css } from "styled-components";
import { NoScroll } from "@src/styles/common";
import { NaviType } from "@src/constant/enum.constant";

const MainContainer = styled.div`
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
    font-family: "GmarketSans", "sans-serif";
    font-weight: 500;
    margin-top: 20px;
    margin-left: 20px;
  }
  strong {
    font-family: "GmarketSans", "sans-serif";
    font-weight: 700;
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
function UserMainTemplate({
  studyList = [],
  onClickNext = () => null,
  hasMore = false,
  loading,
}) {
  const { categoryStore } = useStores();
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    categoryStore
      .getCategoryList()
      .then((list) => setCategoryList(list.slice(3, 6)));
  }, [categoryStore]);

  const router = useRouter();
  const onClickCreateStudy = useCallback(() => {
    router.push("/study/create");
  }, [router]);
  return (
    <MainContainer data-testid="user-main-container">
      <HeaderSectionsWrapper>
        <SearchLikeFilterLinkButtonComponent contents="어떤 스터디 원해?" />
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
        <h2>이런거 배워 보면 어때요? 🍰</h2>
        <CategoryListElementWrapper>
          {categoryList.map((x) => (
            <Link key={x.id} href={`/filter?take=${x.id}`}>
              <a>
                <CategoryTag data-testid="recommended-category-btn">
                  {x.name}
                </CategoryTag>
              </a>
            </Link>
          ))}
        </CategoryListElementWrapper>
      </CurationSectionsWrapper>
      <StudyListComponent
        loading={loading}
        studyList={studyList}
        hasMore={hasMore}
        onClickNext={onClickNext}
      />
      <FloatingButtonComponent
        icon={<PencilIcon />}
        onClick={onClickCreateStudy}
      />
      <BottomNavigationComponent selected={NaviType.MAIN} />
    </MainContainer>
  );
}

export default UserMainTemplate;
