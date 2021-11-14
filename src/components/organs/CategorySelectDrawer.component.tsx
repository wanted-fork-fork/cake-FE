import { useCallback, useEffect, useMemo, useState } from "react";
import { GuestMain } from "@src/styles/template/GuestMain.styles";
import { Button } from "@src/components/atoms/Button";
import styled from "styled-components";
import { NoScroll } from "@src/styles/common";
import { useStores } from "@src/store/root.store";
import CategorySelectComponent from "@src/components/molecules/CategorySelectComponent";
import { Padding } from "@src/styles/theme";
import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";

interface ContainerProp {
  visible: boolean;
}
const Container = styled.div<ContainerProp>`
  width: 100%;
  height: 100vh;
  padding: ${Padding.page};

  background-color: #fff;
  z-index: 10000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: ${({ visible }) => (visible ? "block" : "none")};

  h3 {
    padding-top: 70px;
    text-align: left;
    margin-bottom: 20px;
    font-weight: 600;
    word-break: keep-all;
  }
`;
const ContentWrapper = styled.div`
  ${NoScroll};

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  overflow-y: auto;
  padding-bottom: 150px;
`;
function CategorySelectDrawerComponent({
  visible,
  onClose,
  buttonTextOnEmpty,
  selectedList,
  setSelectedList,
  title = "",
}) {
  const { categoryStore } = useStores();

  const [categoryList, setCategoryList] = useState([]);

  const onToggleCategory = useCallback(
    (selected) => {
      const originalList = [...selectedList];

      const found = originalList.find((x) => x.id === selected.id);

      if (found)
        setSelectedList(originalList.filter((x) => x.id !== selected.id));
      else setSelectedList([...originalList, selected]);
    },
    [selectedList, setSelectedList],
  );

  useEffect(() => {
    categoryStore.getCategoryList().then((list) => setCategoryList(list));
  }, [categoryStore]);

  const categoryListDom = useMemo(
    () =>
      categoryList.map((x) => {
        const onClick = () => onToggleCategory(x);
        return (
          <CategorySelectComponent
            key={x.id}
            img={x.img}
            selected={selectedList.find((y) => y.id === x.id) !== undefined}
            name={x.name}
            onClick={onClick}
          />
        );
      }),
    [categoryList, onToggleCategory, selectedList],
  );

  const selectedNothing = useMemo(
    () => selectedList.length === 0,
    [selectedList],
  );

  return (
    <Container visible={visible}>
      <TitleHeaderComponent title="" onBack={onClose} />
      <h3>{title}</h3>
      <ContentWrapper>
        {categoryListDom}
        <GuestMain.BottomWrap>
          <Button
            type="button"
            color={selectedNothing ? "gray" : "primary"}
            onClick={onClose}
          >
            {selectedNothing ? buttonTextOnEmpty : "선택 완료"}
          </Button>
        </GuestMain.BottomWrap>
      </ContentWrapper>
    </Container>
  );
}

export default CategorySelectDrawerComponent;
