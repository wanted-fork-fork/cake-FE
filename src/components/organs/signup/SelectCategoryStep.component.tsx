import { useMemo } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

// lib
import { useStores } from "@src/store/root.store";
import { CategoryType } from "@src/constant/enum.constant";

// component
import CategorySelectComponent from "@src/components/molecules/CategorySelectComponent";
import { Button } from "@src/components/atoms/Button";

// styles
import { NoScroll } from "@src/styles/common";
import { GuestMain } from "@src/styles/template/GuestMain.styles";

const Container = styled.div`
  ${NoScroll};

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;

  overflow-y: auto;
  padding-bottom: 150px;
`;

const S = { Container };

type SelectCategoryStepProps = {
  type: CategoryType;
  onSelect: (type: CategoryType, id: number) => void;
  onClickNext: () => void;
  buttonTextOnEmpty: string;
};

const SelectCategoryStepComponent = observer(
  ({
    type,
    onSelect,
    onClickNext,
    buttonTextOnEmpty = "",
  }: SelectCategoryStepProps) => {
    const { categoryStore, signupStore } = useStores();
    const selectedList = useMemo(() => {
      if (type === CategoryType.GIVE) return signupStore.form.give;
      if (type === CategoryType.TAKE) return signupStore.form.take;
      return [];
    }, [signupStore.form.give, signupStore.form.take, type]);

    const categoryListDom = useMemo(
      () =>
        categoryStore.categoryList.map((x) => {
          const onClick = () => onSelect(type, x.id);
          return (
            <CategorySelectComponent
              key={x.id}
              img={x.img}
              selected={selectedList.find((y) => y === x.id) !== undefined}
              name={x.name}
              onClick={onClick}
            />
          );
        }),
      [categoryStore.categoryList, selectedList, onSelect, type],
    );

    const selectedNothing = useMemo(
      () => selectedList.length === 0,
      [selectedList],
    );

    return (
      <S.Container>
        {categoryListDom}
        <GuestMain.BottomWrap>
          <Button
            type="button"
            color={selectedNothing ? "gray" : "primary"}
            onClick={onClickNext}
          >
            {selectedNothing ? buttonTextOnEmpty : "선택 완료"}
          </Button>
        </GuestMain.BottomWrap>
      </S.Container>
    );
  },
);

export default SelectCategoryStepComponent;
