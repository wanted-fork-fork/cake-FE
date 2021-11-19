import { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";
import { useStores } from "@src/store/root.store";
import { Button } from "@src/components/atoms/Button";

declare global {
  interface Window {
    // eslint-disable-next-line
    kakao: any;
  }
}

const MapComponent = observer(({ setSelectedCafe }) => {
  const { kakao } = window;

  const { userStore, mapService } = useStores();

  const mapDivRef = useRef(null);

  const [center, setCenter] = useState(null);
  const [cafeList, setCafeList] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (mapDivRef.current && !mapLoaded && center && cafeList.length > 0) {
      setMapLoaded(true);

      const mapOption = {
        center: new kakao.maps.LatLng(center.y, center.x), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      const map = new kakao.maps.Map(mapDivRef.current, mapOption);

      cafeList.map((cafe) => {
        const marker = new kakao.maps.Marker({
          map,
          position: new kakao.maps.LatLng(cafe.y, cafe.x),
          title: cafe.place_name,
          clickable: true,
        });
        const infoWindow = new kakao.maps.InfoWindow({
          content: cafe.place_name,
          removable: true,
        });

        kakao.maps.event.addListener(marker, "click", () => {
          setSelectedCafe(cafe);
          map.setCenter(new kakao.maps.LatLng(cafe.y, cafe.x));
          // if (!selectedMarker || selectedMarker !== marker) {
          //   if (selectedMarker)
          //     selectedMarker.setImage(selectedMarker.normalImage);
          // }
        });
        kakao.maps.event.addListener(marker, "mouseover", () => {
          infoWindow.open(map, marker);
        });
        kakao.maps.event.addListener(marker, "mouseout", () => {
          infoWindow.close(map, marker);
        });
        return marker;
      });
    }
  }, [cafeList, center, kakao, mapLoaded, setSelectedCafe]);

  useEffect(() => {
    if (!userStore.myUniv) {
      userStore.getMyUniv();
    } else if (!center) {
      mapService.searchWithKeyword(userStore.myUniv).then((univ) => {
        const found = univ.documents[0];
        setCenter({ x: found.x, y: found.y });
        mapService
          .searchWithCategories(found.x, found.y)
          .then((cafeResponse) => {
            setCafeList(cafeResponse.documents);
          });
      });
    }
  }, [center, mapService, userStore, userStore.myUniv]);

  return (
    <div>
      <div
        ref={mapDivRef}
        style={{ width: window.innerWidth, height: "400px" }}
      />
    </div>
  );
});

export default MapComponent;
