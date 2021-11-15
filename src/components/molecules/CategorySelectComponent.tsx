import CameraIcon from "@src/components/icon/Camera.icon";
import styled from "styled-components";
import theme, { Padding, windowSize } from "@src/styles/theme";
import CheckIcon from "@src/components/icon/Check.icon";
import { MouseEventHandler } from "react";

const CategoryWrapper = styled.div<CategoryWrapperProp>`
  cursor: pointer;
  user-select: none;

  width: fit-content;
  margin: 0;
`;
const CategoryImageWrapper = styled.div<CategoryImageWrapperProp>`
  border-radius: 12px;
  background-color: ${theme.color.gray2};

  ${({ size = "full" }) => {
    switch (size) {
      case "grid":
        return `height: auto; width: 25%;`;
      case "full":
      default:
        return `
        height: calc((100vw - 2 * ${Padding.pageX} - 30px) / 4);
        width: calc((100vw - 2 * ${Padding.pageX} - 30px) / 4);
        `;
    }
  }};

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  ${theme.window.tab} {
    height: calc((${windowSize.mobile} - 2 * ${Padding.pageX} - 30px) / 4);
    width: calc((${windowSize.mobile} - 2 * ${Padding.pageX} - 30px) / 4);
  }
`;
const CategoryImage = styled.img`
  height: calc((100vw - 2 * ${Padding.pageX} - 30px) / 4);
  width: auto;
  user-select: none;

  ${theme.window.tab} {
    height: calc((${windowSize.mobile} - 2 * ${Padding.pageX} - 30px) / 4);
  }
`;
const CategoryDescription = styled.p`
  margin-top: 10px;
  text-align: center;
  user-select: none;
`;
const SelectedMask = styled.div<{ selected: boolean }>`
  display: ${({ selected }) => (selected ? "flex" : "none")};
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.43);

  border-radius: 12px;
  border: 4px solid ${theme.color.primary};

  justify-content: center;
  align-items: center;
`;

type CategoryComponentProp = {
  selected: boolean;
  img: string | null;
  name: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  size?: "full" | "grid";
};

type CategoryImageWrapperProp = {
  size?: "full" | "grid";
};

type CategoryWrapperProp = {
  onClick: MouseEventHandler<HTMLDivElement>;
};
CategorySelectComponent.defaultProps = {
  size: "full",
};
function CategorySelectComponent({
  selected = false,
  img = null,
  name = "",
  onClick = null,
  size,
}: CategoryComponentProp) {
  return (
    <CategoryWrapper onClick={onClick}>
      <CategoryImageWrapper size={size}>
        {img ? <CategoryImage src={img} alt={name} /> : <CameraIcon />}
        <SelectedMask selected={selected}>
          <CheckIcon />
        </SelectedMask>
      </CategoryImageWrapper>
      <CategoryDescription>{name}</CategoryDescription>
    </CategoryWrapper>
  );
}

export default CategorySelectComponent;
