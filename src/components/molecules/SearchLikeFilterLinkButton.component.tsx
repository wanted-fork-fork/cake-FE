import Link from "next/link";
import { Button } from "@src/components/atoms/Button";
import theme, { Padding } from "@src/styles/theme";
import ColoredSearchIcon from "@src/components/icon/ColoredSearch.icon";
import styled from "styled-components";

const SearchContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${Padding.pageX};
  svg {
    margin-right: 10px;
  }
`;

function SearchLikeFilterLinkButtonComponent({ contents, mb = "0" }) {
  return (
    <Link href="/filter">
      <a>
        <Button
          color={theme.color.gray1}
          textAlign="left"
          shape="full-rounded"
          height="48px"
          fontSize="small"
          mb={mb}
        >
          <SearchContentsWrapper>
            <ColoredSearchIcon />
            <span>{contents}</span>
          </SearchContentsWrapper>
        </Button>
      </a>
    </Link>
  );
}

export default SearchLikeFilterLinkButtonComponent;
