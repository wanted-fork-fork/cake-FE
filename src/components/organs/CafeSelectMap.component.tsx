import MapComponent from "@src/components/organs/Map.component";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { Button } from "@src/components/atoms/Button";
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import { FontSize, Padding } from "@src/styles/theme";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 9999;
`;
const CafeWrapper = styled.div`
  padding: 0 ${Padding.pageX};
`;
const InfoWrapper = styled.div`
  margin: 20px 0;
`;
const PlaceName = styled.p`
  font-size: ${FontSize.PrimaryLabel};
  font-weight: 500;
  margin-bottom: 10px;
`;
const AddressName = styled.p`
  font-size: ${FontSize.PrimaryDescription};
`;
const PleaseSelectMsg = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: ${FontSize.Default};
  font-weight: 500;
`;
function CafeSelectMapComponent({ onClickOkay, setInvisible }) {
  const [selectedCafe, setSelectedCafe] = useState(null);

  const onClickSubmit = useCallback(() => {
    if (onClickOkay) onClickOkay(selectedCafe);
    setInvisible();
  }, [onClickOkay, selectedCafe, setInvisible]);

  const onBack = useCallback(() => {
    setInvisible();
    setSelectedCafe(null);
  }, [setInvisible]);

  return (
    <Container>
      <PageWrapperComponent title="장소 선택" button={null} onBack={onBack}>
        <MapComponent setSelectedCafe={setSelectedCafe} />
        {selectedCafe ? (
          <CafeWrapper>
            <InfoWrapper>
              <PlaceName>{selectedCafe.place_name}</PlaceName>
              <AddressName>{selectedCafe.road_address_name}</AddressName>
            </InfoWrapper>
            <Button
              onClick={onClickSubmit}
              height="48px"
              fontSize="small"
              color="point"
            >
              결정
            </Button>
          </CafeWrapper>
        ) : (
          <PleaseSelectMsg>지도에서 카페를 선택해주세요!</PleaseSelectMsg>
        )}
      </PageWrapperComponent>
    </Container>
  );
}

export default CafeSelectMapComponent;
