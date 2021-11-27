import RightArrowIcon from "@src/components/icon/RightArrow.icon";
import styled from "styled-components";
import theme, { nowWindowSize } from "@src/styles/theme";

const InfoBoxTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  h3 {
    //margin-bottom: 0;
  }
  p {
    margin-bottom: 0;
    text-align: left;
  }
`;
const CategoryListWrapper = styled.div<{ pr: string }>`
  padding-right: ${({ pr = 0 }) => pr};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px;
`;

const Category = styled.div`
  width: calc((${nowWindowSize} - 80px) / 6 - 6px);
  height: calc((${nowWindowSize} - 80px) / 6 - 6px);
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid ${theme.color.point};
  margin: 0 auto;
  img {
    width: calc((${nowWindowSize} - 80px) / 6 - 6px);
    height: calc((${nowWindowSize} - 80px) / 6 - 6px);
  }

  ${theme.window.tab} {
    width: calc((${nowWindowSize} - 130px) / 6 - 6px);
    height: calc((${nowWindowSize} - 130px) / 6 - 6px);
    img {
      width: calc((${nowWindowSize} - 130px) / 6 - 6px);
      height: calc((${nowWindowSize} - 130px) / 6 - 6px);
    }
  }
`;
function ProfileCategoryListBox({
  title,
  categories,
  pr = "0",
  allowModify = true,
}) {
  return (
    <div>
      <InfoBoxTitleWrapper>
        <h3>{title}</h3>
        <div>{allowModify && <RightArrowIcon />}</div>
      </InfoBoxTitleWrapper>
      <CategoryListWrapper pr={pr}>
        {categories.map((x) => (
          <Category key={x.id}>
            <img src={x.img} alt={x.name} />
          </Category>
        ))}
      </CategoryListWrapper>
    </div>
  );
}

export default ProfileCategoryListBox;
