/* global kakao */
import { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";
import { useStores } from "@src/store/root.store";
import { Button } from "@src/components/atoms/Button";

const MapComponent = observer(() => {
  const { userStore, mapService } = useStores();

  const mapDivRef = useRef(null);

  const [center, setCenter] = useState(null);
  const [cafeList, setCafeList] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (mapDivRef.current && !mapLoaded && center && cafeList.length > 0) {
      setMapLoaded(true);

      const mapOption = {
        center: new window.kakao.maps.LatLng(center.y, center.x), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      // eslint-disable-next-line no-new
      const map = new window.kakao.maps.Map(mapDivRef.current, mapOption);

      cafeList.map((cafe) => {
        const marker = new window.kakao.maps.Marker({
          map,
          position: new window.kakao.maps.LatLng(cafe.y, cafe.x),
          title: cafe.place_name,
          clickable: true,
        });
        const infoWindow = new window.kakao.maps.InfoWindow({
          content: cafe.place_name,
          removable: true,
        });

        window.kakao.maps.event.addListener(marker, "click", () => {
          setSelectedCafe(cafe);
        });
        window.kakao.maps.event.addListener(marker, "mouseover", () => {
          infoWindow.open(map, marker);
        });
        window.kakao.maps.event.addListener(marker, "mouseout", () => {
          infoWindow.close(map, marker);
        });
        return marker;
      });
    }
  }, [cafeList, center, mapLoaded, selectedCafe]);

  useEffect(() => {
    if (!userStore.myUniv) {
      userStore.getMyUniv();
    } else if (!center) {
      mapService.searchWithKeyword(userStore.myUniv).then((res) => {
        const found = res.documents[0];
        setCenter({ x: found.x, y: found.y });
        mapService.searchWithCategories(found.x, found.y).then((res) => {
          setCafeList(res.documents);
        });
      });
    }
  }, [center, mapService, userStore, userStore.myUniv]);

  return (
    <div>
      <div ref={mapDivRef} style={{ width: "500px", height: "500px" }} />
      {selectedCafe && (
        <div>
          {selectedCafe.place_name}
          <Button height="48px" fontSize="small" color="point">
            결정
          </Button>
        </div>
      )}
    </div>
  );
});

export default MapComponent;
