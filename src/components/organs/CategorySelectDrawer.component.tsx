import styled from "styled-components";
import { useCallback, useEffect, useMemo, useState } from "react";

// lib
import { useStores } from "@src/store/root.store";

// components
import { Button } from "@src/components/atoms/Button";
import { ErrorMessage } from "@src/components/atoms/text/ErrorMessage";
import { BoxInput } from "@src/components/atoms/Input";
import CategorySelectComponent from "@src/components/molecules/CategorySelectComponent";
import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";
import InputWithSuffixComponent from "@src/components/molecules/InputWithSuffix.component";

// styles
import { FontSize } from "@src/styles/theme";
import { GuestMain } from "@src/styles/template/GuestMain.styles";
import { NoScroll } from "@src/styles/common";
import { PagePopup } from "@src/components/atoms/PagePopup";

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 80px;
  h3 {
    margin-bottom: 0;
    margin-right: 10px;
  }
  span {
    margin-left: 10px;
    font-size: ${FontSize.Small};
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
  description = "",
  multiple = true,
  showPoint = false,
  remain = null,
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
        if (onChangePointValue) onChangePointValue({ target: { value: "" } });
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

  useEffect(() => {
    const found = selectedList.find((x) => x.name === "?????????");
    if (found) setPointSelected(true);
  }, [selectedList]);

  const categoryListDom = useMemo(
    () =>
      categoryList
        .filter((x) => x.name !== "?????????")
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
    () => categoryList.find((x) => x.name === "?????????"),
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

  const disableButton = useMemo(
    () =>
      !showPoint ||
      (pointSelected && pointValue === "" && onChangePointValue) ||
      (remain !== null && pointValue > remain),
    [onChangePointValue, pointSelected, pointValue, remain, showPoint],
  );

  return (
    <PagePopup visible={visible}>
      <TitleHeaderComponent title="" onBack={onClose} />
      <LabelWrapper>
        <h3>{title}</h3>
        <span>{description}</span>
      </LabelWrapper>
      {pointSelected && onChangePointValue && (
        <PointWrapper>
          <InputWithSuffixComponent
            input={
              <BoxInput
                fontSize="small"
                placeholder="?????? ?????? ????????? ??????????????????"
                value={pointValue}
                onChange={onChangePointValue}
              />
            }
            suffix={
              remain !== null ? (
                <ErrorMessage pt="5px" mr="15px">
                  ?????? ?????? {remain}??????
                </ErrorMessage>
              ) : (
                <></>
              )
            }
          />
        </PointWrapper>
      )}
      {remain !== null && pointValue > remain && (
        <ErrorMessage mb="10px">
          ????????? ????????? ?????? ???????????? ????????????!
        </ErrorMessage>
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
            disabled={disableButton}
          >
            {selectedNothing ? buttonTextOnEmpty : "?????? ??????"}
          </Button>
        </GuestMain.BottomWrap>
      </ContentWrapper>
    </PagePopup>
  );
}

export default CategorySelectDrawerComponent;
