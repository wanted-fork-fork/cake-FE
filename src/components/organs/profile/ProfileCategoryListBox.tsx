import RightArrowIcon from "@src/components/icon/RightArrow.icon";
import styled from "styled-components";
import theme from "@src/styles/theme";

const InfoBoxTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  cursor: pointer;
  div {
    width: calc((100vw - 40px - 40px) / 6 - 6px);
    height: calc((100vw - 40px - 40px) / 6 - 6px);
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid ${theme.color.point};
    margin: 0 auto;
  }
  img {
    width: calc((100vw - 40px - 40px) / 6 - 6px);
    height: calc((100vw - 40px - 40px) / 6 - 6px);
  }
`;
function ProfileCategoryListBox({ title, categories, pr = "0" }) {
  return (
    <div>
      <InfoBoxTitleWrapper>
        <h3>{title}</h3>
        <div>
          <RightArrowIcon />
        </div>
      </InfoBoxTitleWrapper>
      <CategoryListWrapper pr={pr}>
        {categories.map((x) => (
          <div key={x.id}>
            <img src={x.img} alt={x.name} />
          </div>
        ))}
      </CategoryListWrapper>
    </div>
  );
}

export default ProfileCategoryListBox;
