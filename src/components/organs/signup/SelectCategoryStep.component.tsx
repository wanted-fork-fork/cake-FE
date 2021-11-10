import { useMemo } from "react";
import styled from "styled-components";

// component
import CategoryComponent from "@src/components/molcules/Category.component";

// styles
import { NoScroll } from "@src/styles/common";
import { useStores } from "@src/store/root.store";
import { observer } from "mobx-react";
import { CategoryType } from "@src/constant/enum.constant";

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
};

const SelectCategoryStepComponent = observer(
  ({ type, onSelect }: SelectCategoryStepProps) => {
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
            <CategoryComponent
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

    return <S.Container>{categoryListDom}</S.Container>;
  },
);

export default SelectCategoryStepComponent;
