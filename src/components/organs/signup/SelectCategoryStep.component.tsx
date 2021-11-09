import styled from "styled-components";
// component
import CategoryComponent from "@src/components/molcules/Category.component";
// styles
import { NoScroll } from "@src/styles/common";
import { Category } from "@src/models/dto/signup.dto";
import { useMemo } from "react";

const Container = styled.div`
  ${NoScroll};

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;

  //overflow-y: auto;
  padding-bottom: 150px;
`;

const S = { Container };

type SelectCategoryStepProps = {
  categoryList: Category[];
  selectedList: number[];
};

function SelectCategoryStepComponent({
  categoryList = [],
  selectedList = [],
}: SelectCategoryStepProps) {
  const categoryListDom = useMemo(
    () =>
      categoryList.map((x, idx) => (
        <CategoryComponent
          key={x.id}
          img={x.img}
          selected={selectedList.find((y) => y === x.id) !== undefined}
          name={x.name}
        />
      )),
    [categoryList, selectedList],
  );

  return <S.Container>{categoryListDom}</S.Container>;
}

export default SelectCategoryStepComponent;
