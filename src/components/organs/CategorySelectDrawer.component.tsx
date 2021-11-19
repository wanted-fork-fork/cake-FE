import { useCallback, useEffect, useMemo, useState } from "react";
import { GuestMain } from "@src/styles/template/GuestMain.styles";
import { Button } from "@src/components/atoms/Button";
import styled from "styled-components";
import { NoScroll } from "@src/styles/common";
import { useStores } from "@src/store/root.store";
import CategorySelectComponent from "@src/components/molecules/CategorySelectComponent";
import { Padding } from "@src/styles/theme";
import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";
import { BoxInput } from "@src/components/atoms/Input";
import InputWithSuffixComponent from "@src/components/molecules/InputWithSuffix.component";
import { ErrorMessage } from "@src/components/atoms/text/ErrorMessage";

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
const PointWrapper = styled.div`
  margin-bottom: 10px;
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
  multiple = true,
  showPoint = false,
  remain = 0,
  pointValue = "",
  onChangePointValue = null,
}) {
  const { categoryStore } = useStores();

  const [categoryList, setCategoryList] = useState([]);
  const [pointSelected, setPointSelected] = useState(false);

  const onToggleCategory = useCallback(
    (selected) => {
      let originalList = [...selectedList];
      if (pointSelected) {
        originalList = [];
        onChangePointValue({ target: { value: "" } });
      }
      setPointSelected(false);

      const found = originalList.find((x) => x.id === selected.id);

      if (found)
        setSelectedList(originalList.filter((x) => x.id !== selected.id));
      else if (multiple) setSelectedList([...originalList, selected]);
      else setSelectedList([selected]);
    },
    [
      multiple,
      onChangePointValue,
      pointSelected,
      selectedList,
      setSelectedList,
    ],
  );

  useEffect(() => {
    categoryStore
      .getCategoryList(showPoint)
      .then((list) => setCategoryList(list));
  }, [categoryStore, showPoint]);

  const categoryListDom = useMemo(
    () =>
      categoryList
        .filter((x) => x.name !== "포인트")
        .map((x) => {
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

  const pointInfo = useMemo(
    () => categoryList.find((x) => x.name === "포인트"),
    [categoryList],
  );

  const selectedNothing = useMemo(
    () => selectedList.length === 0,
    [selectedList],
  );

  const onClickPoint = useCallback(() => {
    setSelectedList([pointInfo]);
    setPointSelected(true);
  }, [pointInfo, setSelectedList]);

  return (
    <Container visible={visible}>
      <TitleHeaderComponent title="" onBack={onClose} />
      <h3>{title}</h3>
      {pointSelected && (
        <PointWrapper>
          <InputWithSuffixComponent
            input={
              <BoxInput
                fontSize="small"
                placeholder="코인 지급 액수를 입력해주세요"
                value={pointValue}
                onChange={onChangePointValue}
              />
            }
            suffix={
              remain ? (
                <ErrorMessage pt="5px" mr="15px">
                  잔여 코인 {remain}코인
                </ErrorMessage>
              ) : (
                <></>
              )
            }
          />
        </PointWrapper>
      )}
      <ContentWrapper>
        {pointInfo && (
          <CategorySelectComponent
            key={pointInfo.id}
            img={pointInfo.img}
            selected={
              selectedList.find((y) => y.id === pointInfo.id) !== undefined
            }
            name={pointInfo.name}
            onClick={onClickPoint}
          />
        )}

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
